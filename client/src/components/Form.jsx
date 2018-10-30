import React from 'react';
import axios from 'axios';
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
      estimatedCost: 'FILL ME IN',
      buyingPower: 'FILL ME IN',
    };
  }

  
  componentDidMount() {

    var result = this.props.asyncGet((res) => {
      console.log(res.data[0].symbol);
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
      <input placeholder="Shares"></input>
      <EstimatedCost estimation={this.state.estimatedCost}/>
      <ReviewOrder/>
      <BuyingPower credits={this.state.buyingPower}/>
      <WatchList/>
    </div>;
  }
}

export default Form;

// I think I need to have Form be a class component that divvies out info accordingly