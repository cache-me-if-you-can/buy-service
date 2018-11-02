import React from 'react';
import form from './Form.css';

class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: false,
    };
  }
  
  render() {
    return (
      <button className={form.reviewOrder}>Review Order</button>
    );
  }
}

export default ReviewOrder;