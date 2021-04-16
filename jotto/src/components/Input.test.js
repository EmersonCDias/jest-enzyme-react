import { shallow } from 'enzyme';

import Input from "./Input";
import { findByTestAttr, checkProps } from '../../test/testUtils';

const setup = (secretWord="party") => shallow(<Input secretWord={secretWord} />)

describe('Input', () => {
  it('should render without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'input')
    expect(inputComponent.length).toBe(1);
  });

  it('should not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' });
  })
})
