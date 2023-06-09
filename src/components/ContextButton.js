import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import React, { useState, useEffect } from 'react';
import styles from './ContextButton.module.css';

export default function ContextLinks({frontmatter}) {

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {

          const [activeLink, setActiveLink] = useState( 
              localStorage.getItem('activeLink') || frontmatter.deployment
          );
        
          useEffect(() => {
            localStorage.setItem('activeLink', activeLink);
            setActiveLink(frontmatter.deployment);
          }, [activeLink]);
        
          const handleLinkClick = (linkName) => {
            setActiveLink(linkName);
          };

          return (
            <div className={styles.container}>
              {frontmatter.contextLinks.map((link) => (
                <Link
                  key={link.name}
                  id={link.name}
                  to={frontmatter.linkRoot + link.to}
                  onClick={() => handleLinkClick(link.name)}
                  className={`${styles.contextLink} ${activeLink === link.name ? styles.active : ''}`}
                >
                  <button type="button">{link.name}</button>
                </Link>
              ))}
            </div>
          );
        }
      }
      </BrowserOnly>
  );
}