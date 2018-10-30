import React from 'react';

const MarketPrice = (props) => (
  <div>
    <button id="market-price-button"></button>
    <span id="market-price-number">{props}</span> 
  </div>
);

export default MarketPrice;