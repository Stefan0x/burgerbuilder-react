import React from 'react';

import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = ( props ) => (
  <header className={classes.Toolbar}>
    <DrawerToggle click={props.openMenu} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <Navigation />
    </nav>
  </header>
);

export default toolbar;
