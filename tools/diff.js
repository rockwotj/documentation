const fs = require('fs');
const path = require('path');

function readFilesRecursively(folderPath, fileMap) {
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    if (!file.startsWith('_')) {
      const filePath = path.join(folderPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        readFilesRecursively(filePath, fileMap);
      } else {
        const fileExtension = path.extname(file);
        if (fileExtension === '.mdx') {
          const fileNameWithoutExtension = path.parse(file).name;
          fileMap.set(fileNameWithoutExtension, filePath);
        }
      }
    }
  });
}

function extractIds(sidebar, idMap) {
  sidebar.forEach(sidebarItem => {
    if (sidebarItem.type === 'doc' && sidebarItem.id) {
      const id = sidebarItem.id.split('/').pop();
      idMap.set(id, true);
    } else if (sidebarItem.type === 'link' && sidebarItem.id) {
      const id = sidebarItem.id.split('/').pop();
      idMap.set(id, true);
    } else if (sidebarItem.type === 'category' && sidebarItem.items) {
      if (sidebarItem.link && sidebarItem.link.id) {
        const linkId = sidebarItem.link.id.split('/').pop();
        idMap.set(linkId, true);
      }
      extractIds(sidebarItem.items, idMap);
    } else if (typeof sidebarItem === 'string') {
      const id = sidebarItem.split('/').pop();
      idMap.set(id, true);
    }
  });
}

function compareFolderWithSidebar(folderPath, sidebarPath) {
  const sidebars = require(sidebarPath);
  const docsSidebar = sidebars.docsSidebar;

  const fileMap = new Map();
  readFilesRecursively(folderPath, fileMap);

  const idMap = new Map();
  extractIds(docsSidebar, idMap);

  const difference = new Map();

  fileMap.forEach((value, key) => {
    if (!idMap.has(key)) {
      difference.set(key, value);
    }
  });

  console.log(`\n===============================================
Testing for ${path.basename(folderPath)}
===============================================\n`);
  if (difference.size === 0) {
    console.log('No files without corresponding IDs found.');
  } else {
    console.log('Files without corresponding IDs:');
    difference.forEach((value, key) => {
      console.log(key);
    });
  }
}


const unversionedFolderPath = path.join(__dirname, 'docs');
const unversionedSidebarPath = path.join(__dirname, 'sidebars.js'); // Make sure 'sidebar.js' is in the same directory as the script

compareFolderWithSidebar(unversionedFolderPath, unversionedSidebarPath);

const versionedDocsPath = path.join(__dirname, 'versioned_docs');
const versionFolders = fs.readdirSync(versionedDocsPath);
const sidebarPathBase = path.join(__dirname, 'versioned_sidebars');

versionFolders.forEach(versionFolder => {
  const versionPath = path.join(versionedDocsPath, versionFolder);
  const versionSidebarPath = path.join(sidebarPathBase, `${versionFolder}-sidebars.json`);

  if (fs.existsSync(versionSidebarPath)) {
    compareFolderWithSidebar(versionPath, versionSidebarPath);
  } else {
    console.log(`Sidebar not found for ${versionFolder}`);
  }
});
