import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ( props ) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.currentPrice.toFixed(2)} EUR</strong></p>
      <p>Status: {props.purchasable.toString()}</p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredient={() => props.addIngredient(ctrl.type)}
          removeIngredient={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.makePurchase}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;
