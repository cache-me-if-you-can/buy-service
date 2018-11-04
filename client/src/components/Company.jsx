import React from 'react';
import OrderType from './OrderType.jsx';
import form from './Form.css';

const Company = (props) => (  
  <h3 className={form.companyName}> BUY {props.name}
    <OrderType/>
  </h3>
);

export default Company;