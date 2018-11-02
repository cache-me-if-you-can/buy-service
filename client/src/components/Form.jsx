import React from 'react';
import ReactDOM from 'react-dom';
import Company from './Company.jsx';
import form from './Form.css';
import MarketPrice from './MarketPrice.jsx';
import EstimatedCost from './EstimatedCost.jsx';
import ReviewOrder from './ReviewOrder.jsx';
import BuyingPower from './BuyingPower.jsx';
import WatchList from './WatchList.jsx';
import OrderType from './OrderType.jsx';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      company: 'FILL ME IN',
      marketPrice: 'FILL ME IN',
      estimatedCost: 0,
      buyingPower: '$0.00',
      counter: 0,
      options: 0,
    };
    this.asyncGet = this.asyncGet.bind(this);
    this.handleShares = this.handleShares.bind(this);
  }

  handleShares(e) {
    let x = parseInt(e.target.value);
    if (x < 0) {
      this.setState({
        counter: 0
      });
    }
    if (x >= 0) {
      this.setState({
        counter: x
      });
    }
  }
  
  componentDidMount() {
    this.asyncGet((res) => {
      this.setState({
        company: res.data[0].symbol,
        marketPrice: res.data[0].marketPrice,
      });
    });
  }
  
  asyncGet(callback) {
    axios.get('/api/buytest')
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        callback(error);
      });
  }

  render() {
    return <div>
      <div className={form.form}>
        <header>
          <Company name={this.state.company}/>
        </header>
        <div>
          <div>
            <span>Shares</span>
            <input type="number" 
              className={form.shareField}
              onChange={this.handleShares}></input>
          </div>
          <div>
            <MarketPrice prices={this.state.marketPrice}/>
          </div>
          <div>
            <EstimatedCost estimation={this.state.counter * this.state.marketPrice}/>
            <ReviewOrder/>
          </div>
        </div>
      </div>
      <BuyingPower credits={this.state.buyingPower}/>
      <WatchList/>
    </div>;
  }
}

ReactDOM.render(<Form/>, document.getElementById('app'));

export default Form;
