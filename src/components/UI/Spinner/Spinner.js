import React from 'react';

import classes from './Spinner.module.css';

const spinner = ( props ) => (
  <div className={classes.Spinner}>
    <div className={classes.Dot1}></div>
    <div className={classes.Dot2}></div>
  </div>
);

export default spinner;
