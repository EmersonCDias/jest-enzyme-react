import { shallow } from 'enzyme';

import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from '../../test/testUtils';

const defaultProps = { success: false }

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
}

describe('Congrats', () => {
  it('should render without error', () => {
    const wrapper = setup({ success: false });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.length).toBe(1);
  })

  it('should render no text when success prop is false', () => {
    const wrapper = setup();
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message').text();
    expect(congratsMessage).toBe('');
  })

  it('should non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message').text();
    expect(congratsMessage).toBe('Congratulations! You guessed the word!');
  })

  it('should not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  })
})
