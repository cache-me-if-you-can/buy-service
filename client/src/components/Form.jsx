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
    this.handleDropDown = this.handleDropDown.bind(this);
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
  
  // make a function that on click,
  // renders a dropdown menu on screen
  /* If it has not been clicked, it renders normally 
  
  */

  handleDropDown(e) {
    console.log('This is for the DropDown menu', e.target);
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
    // return <div className= "sideBarContent">
    //   <form className= {form.orderForm}>
    //     <header className= {form.cardHeader}>
    //       <div className="cardHContainer">
    //         <div className= {form.companyName}>
    //           <div>
    //             <div>
    //               <div>
    //                 <Company name={this.state.company}></Company>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <svg>
    //           <g></g>
    //         </svg>
    //         <div>
    //           <div>
    //             <div>
    //               <div>
    //                 <svg>
    //                   <path></path>
    //                 </svg>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </header>
    //     <div></div>
    //     <div>
    //       <div></div>
    //       <div></div>
    //     </div>
    //   </form>
    // </div>;
    return <div>
      <div className= {form.form}>
        <div className= {form.topDiv}>
          <header className={form.header}>
            <Company name={this.state.company} drop={this.handleDropDown}/>
          </header>
          <div>
            <label className={form.label}>
              <span>Shares</span>
              <input type="number" 
                className={form.shareField}
                onChange={this.handleShares}></input>
            </label>
            <div>
              <MarketPrice prices={this.state.marketPrice}/>
            </div>
            <div className={form.label}>
              <EstimatedCost estimation={this.state.counter * this.state.marketPrice}/>
            </div>
          </div>
          <div className= {form.reviewOrderContainer}>
            <ReviewOrder/>
          </div>
        </div>
      </div>
      <div className= {form.buyingPower}> 
        <BuyingPower credits={this.state.buyingPower}/>
      </div>
      <div className={form.watchListContainer}>
        <WatchList/>
      </div>
    </div>;
  }
}

ReactDOM.render(<Form/>, document.getElementById('buyService'));

export default Form;