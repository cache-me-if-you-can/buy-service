import React from 'react';
import form from './Form.css';

const EstimatedCost = (props) => (
  <div className={form.estimatedPriceContainer}> 
    <div>Estimated Cost
      <span className={form.marketPrice}> {props.estimation}</span>
    </div>
  </div>
);

export default EstimatedCost;