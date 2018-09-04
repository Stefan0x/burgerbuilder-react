import React, { Fragment, Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  render () {
    return (
      <Fragment>
        <Toolbar openMenu={this.sideDrawerToggleHandler}/>
        <SideDrawer close={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content} >
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default layout;
