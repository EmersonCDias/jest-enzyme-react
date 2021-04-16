import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import Congrats from "./Congrats";
import { findByTestAttr } from '../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => shallow(<Congrats {...props} />)

describe('Congrats', () => {
  it('should render without error', () => {
    const wrapper = setup();
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.length).toBe(1);
  })

  it('should render no text when success prop is false', () => {
    const wrapper = setup({ success: false });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message').text();
    expect(congratsMessage).toBe('')
  })

  it('should non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message').text();
    expect(congratsMessage).toBe('Congratulations! You guessed the word!')
  })
})
