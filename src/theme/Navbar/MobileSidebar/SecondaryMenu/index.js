import React from 'react';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
export default function NavbarMobileSidebarSecondaryMenu() {
  const secondaryMenu = useNavbarSecondaryMenu();
  return (
    <>
      {secondaryMenu.content}
    </>
  );
}
