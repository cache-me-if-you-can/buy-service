import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <button>Hello</button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));