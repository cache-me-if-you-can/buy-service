import React from 'react';

const EstimatedCost = (props) => (
  <div> Estimated Cost
    <span id="estimated-cost-calc"> {props.estimation}</span>
  </div>
);

export default EstimatedCost;