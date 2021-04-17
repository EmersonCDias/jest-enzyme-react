import React from "react";
import { shallow } from 'enzyme';

import Input from "./Input";
import { findByTestAttr, checkProps } from '../../test/testUtils';

const setup = (success=false, secretWord="party") => {
  return shallow(<Input success={success} secretWord={secretWord} />)
}

// mock entire module for destructing useState on import
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetCurrentGuess],
}))

describe('Input', () => {
  it('should not throw warning with expected props', () => {
    checkProps(Input, { success: false, secretWord: 'party' });
  })

  describe('success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(true);
    })

    it('should render without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'input');
      expect(inputComponent.exists()).toBe(false);
    })

    it('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    })

    it('submit box does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    })
  })

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
    })

    it('should render without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'input');
      expect(inputComponent.exists()).toBe(true);
    })

    it('input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    })

    it('submit box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'submit-button');
      expect(inputBox.exists()).toBe(true);
    })
  })

  describe('state control input field', () => {
    let wrapper;
    let originalUseState;

    beforeEach(() => {
      mockSetCurrentGuess.mockClear();
      originalUseState = React.useState;
      wrapper = setup();
    })

    afterEach(() => {
      React.useState = originalUseState;
    })

    it('should update with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');

      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

    it('should empty input box on submit click button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');

      submitButton.simulate('click', { preventDefault() {} });

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
  })
})
