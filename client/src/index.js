import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      title: ''
    };
    this.asyncGet = this.asyncGet.bind(this);
  }

  asyncGet(callback) {
    axios.get('/api/buytest')
      .then(function (response) {
        // console.log('THA RESPONSE', response);
        callback(response);
      })
      .catch(function (error) {
        // console.log(error);
        callback(error);
      });
  }
  render() {
    return (
      <div>
        <div>Graph</div>
        <span>
          <Form asyncGet={this.asyncGet}></Form>
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));