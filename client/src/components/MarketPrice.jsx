import React from 'react';
import form from './Form.css';
const MarketPrice = (props) => (
  <div className= {form.marketPriceContainer}>
    <div className= {form.marketPriceTitle}> Market Price 
      <span className={form.marketPrice}>${props.prices}</span> 
    </div>
  </div>
);

export default MarketPrice;