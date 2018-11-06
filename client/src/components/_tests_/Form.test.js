import Enzyme, { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

export { mount, shallow, render };
export default Enzyme;

const Form = require('../Form.jsx');

describe('Form', () => {
  const state = {
    company: 'FILL ME IN',
    marketPrice: 'FILL ME IN',
    estimatedCost: 0,
    buyingPower: '$0.00',
    counter: 0,
    options: 0,
  };

  it('Renders', () => {
    const wrapper = shallow(<Form state={state} />);
    expect(wrapper.exists()).toBe(true);
  });
});
