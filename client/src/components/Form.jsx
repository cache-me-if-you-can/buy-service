import React from 'react';

// const Form = () => (
//   <form> 
//     <input placeholder= "Shares"></input>
//   </form>
// );

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      marketPrice: '',
      estimatedCost: '',
      buyingPower: '',
    };
  }
  
  render() {
    return <div>
      <h3 id="company">{this.state.company}this is where the company goes</h3>
      <input placeholder="Shares">
        
      </input>
    </div>;
  }
}

export default Form;

// I think I need to have Form be a class component that divvies out info accordingly