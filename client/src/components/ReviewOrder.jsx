import React from 'react';

class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: false,
    };
  }
  
  render() {
    return (
      <button id="review-order">Review Order</button>
    );
  }
}

export default ReviewOrder;