import React, { Fragment } from 'react';

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
      <button onClick={props.cancelOrder}>CANCEL</button>
      <button>CONTINUE</button>
    </Fragment>
  );
};

export default orderSummary;
