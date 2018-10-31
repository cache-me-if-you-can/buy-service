import React from 'react';
import MarketPrice from './MarketPrice.jsx';
import EstimatedCost from './EstimatedCost.jsx';
import ReviewOrder from './ReviewOrder.jsx';
import BuyingPower from './BuyingPower.jsx';
import WatchList from './WatchList.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'FILL ME IN',
      marketPrice: 'FILL ME IN',
      estimatedCost: 0,
      buyingPower: 'FILL ME IN',
      counter: 0,
    };
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
    this.props.asyncGet((res) => {
      this.setState({
        company: res.data[0].symbol,
        marketPrice: res.data[0].marketPrice,
      });
    });
  }
  
  render() {
    return <div>
      <h3 id="company">{this.state.company}</h3>
      <MarketPrice prices={this.state.marketPrice}/>
      <input type="number" placeholder="Shares" onChange={this.handleShares}></input>
      <EstimatedCost estimation={this.state.counter * this.state.marketPrice}/>
      <ReviewOrder/>
      <BuyingPower credits={this.state.buyingPower}/>
      <WatchList/>
    </div>;
  }
}

export default Form;
