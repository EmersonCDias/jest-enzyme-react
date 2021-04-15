import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* Factory function to create a ShallowWrapper for the App component.
* @function setup
* @returns {ShallowWrapper}
*/
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

describe('Counter', () => {
  it('should render without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.length).toBe(1);
  })

  it('should render increment button', () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, 'increment-button')
    expect(incrementButton.length).toBe(1);
  })

  it('should render counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1);
  })

  it('should render decrement button', () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    expect(decrementButton.length).toBe(1);
  })

  it('should display counter starting at 0', () => {
    const wrapper = setup();
    const counter = findByTestAttr(wrapper, 'counter').text();
    expect(counter).toBe("0");
  })

  it('should increment counter display by clicking in the button', () => {
    const wrapper = setup();

    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    const counter = findByTestAttr(wrapper, 'counter').text();
    expect(counter).toBe("1");
  })

  it('should decrement counter display by clicking in the button', () => {
    const wrapper = setup();

    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    const counter = findByTestAttr(wrapper, 'counter').text();
    expect(counter).toBe("0");
  })

  it('should not decrement if count is zero', () => {
    const wrapper = setup();

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    const counter = findByTestAttr(wrapper, 'counter').text();
    expect(counter).toBe("0");
  })

  it('should not display an error at first page access', () => {
    const wrapper = setup();

    const errorMessage = findByTestAttr(wrapper, 'error-message');
    expect(errorMessage.length).toBe(0);
  })

  it('should display an error if count is zero and decrement button is clicked', () => {
    const wrapper = shallow(<App />)

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    const errorMessage = wrapper.find("[data-test='error-message']");
    expect(errorMessage.length).toBe(1);
  })
})
