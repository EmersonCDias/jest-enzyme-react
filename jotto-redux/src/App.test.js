import { mount } from "enzyme";

import { findByTestAttr } from "./tests/testUtils";
import App from "./App";

// activate global mock to make sure getSecretWord does not make network call
jest.mock('./actions');
import { getSecretWord as  mockGetSecretWord} from "./actions";

/**
 * Setup function do App component
 * @return {ShallowWrapper}
*/

const setup = () => {
  // use mount, because useEffect is not called on 'shallow'
  return mount(<App />);
};

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.exists()).toBe(true);
});

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  })

  it('get secret word on app mount', () => {
    const wrapper = setup();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  })

  it('getSecretWord does not run on app update', () => {
    const wrapper = setup();

    mockGetSecretWord.mockClear();

    // Using setProps because wrapper.update() does not trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  })
})
