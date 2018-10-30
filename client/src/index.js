import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <div>
        <div>Graph</div>
        <div>
          <Form></Form>
        </div>
        <div>About</div>
        <div>Collections</div>
        <div>News</div>
        <div>Price Paid On Robinhood</div>
        <div>People Also Bought</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));