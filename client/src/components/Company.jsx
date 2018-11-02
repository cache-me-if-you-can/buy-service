import React from 'react';
import OrderType from './OrderType.jsx';
import form from './Form.css';

const Company = (props) => (
  <div className={form.testFont}> BUY {props.name}
    <OrderType/>
  </div>
);

export default Company;