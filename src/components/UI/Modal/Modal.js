import React, { Fragment, Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class modal extends Component {

  // Performance (Re-Rendering only if visible)
  // https://reactjs.org/docs/react-component.html#shouldcomponentupdate
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show;
  }

  render() {
    return(
      <Fragment>
        <Backdrop show={this.props.show} hideModal={this.props.hideModal}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
          }}>{this.props.children}</div>
      </Fragment>
    );
  }
}

export default modal;
