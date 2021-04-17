import { shallow } from "enzyme";

import { findByTestAttr } from "../testUtils";
import App from "../../App";

/**
 * Setup function do App component
 * @return {ShallowWrapper}
*/

const setup = () => shallow(<App />);

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.exists()).toBe(true);
});
