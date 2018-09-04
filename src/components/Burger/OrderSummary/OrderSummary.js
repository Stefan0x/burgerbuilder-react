import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Your ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <h4>Total Price: {props.orderTotal.toFixed(2)} EUR</h4>
      <Button type="Danger" click={props.cancelOrder}>CANCEL</Button>
      <Button type="Success" click={props.continuePurchase}>CONTINUE</Button>
    </Fragment>
  );
};

export default orderSummary;
