import React from 'react';

const MarketPrice = (props) => (
  <div>
    <button id="market-price-button">Market Price </button>
    <span id="market-price-number">${props.prices}</span> 
  </div>
);

export default MarketPrice;