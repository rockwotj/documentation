const fs = require('fs');

// Parse _redirects file into Docusaurus global data
async function plugin(context, options) {
  return {
    name: 'parse-redirects-plugin',
    async loadContent() {
      const redirectsPath = context.siteDir.concat("/static/_redirects");
      const contents = fs.readFileSync(redirectsPath, 'utf8');
      const redirects = {};
      contents.split('\n').forEach(line => {
        const [source, destination] = line.split(/\s+/);
        // Make sure the line is not a comment
        if (!line.trim().startsWith("#")) {
          const [source, destination] = line.split(/\s+/);
          if (source && destination) {
            redirects[source.replace(/\/$/, '')] = destination.replace(/\/$/, '');
          }
        }
      });
      //console.log("Redirects:",redirects)
      return redirects;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      // Create redirects global data
      setGlobalData({ redirects: content });
    },
  };
}

module.exports = plugin;
