import React from 'react';
import form from './Form.css';
class WatchList extends React.Component {
  constructor() {
    super();

    this.state = {
      beenClicked: false,
      add: '',
      remove: '',
    };
  }

  render() {
    return (
      <button className= {form.watchList}>Remove From Watchlist</button>
    );
  }
}

export default WatchList;

// this.state is going to be conditionally rendered, changing the button from 'Add to Watchlist' to 'Remove From Watchlist' on click
// it needs a function and a value for add and a value for remove.