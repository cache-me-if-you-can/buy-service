import React from 'react';
import form from './Form.css';
const BuyingPower = (props) => (
  <div>
    <span className={form.moveSpan}>{props.credits} Buying Power </span>
  </div>
);

export default BuyingPower;