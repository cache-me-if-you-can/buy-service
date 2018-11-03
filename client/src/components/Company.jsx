import React from 'react';
import OrderType from './OrderType.jsx';
import form from './Form.css';

const Company = (props) => (
  <div>
    <div className={form.topDiv}> BUY {props.name}
      <OrderType/>
    </div>
  </div>
);

export default Company;