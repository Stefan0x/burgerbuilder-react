import React from 'react';

import Button from '../../../UI/Button/Button';
import classes from './BuildControl.module.css';

const buildControl = ( props ) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <Button type={classes.Less} click={props.removeIngredient} disabled={props.disabled}>Less</Button>
    <Button type={classes.More} click={props.addIngredient}>More</Button>
  </div>
);

export default buildControl;
