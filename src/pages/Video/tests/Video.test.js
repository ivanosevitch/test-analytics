// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Video from './Video';

/*
This file contains all unit tests. The standard is:
  - The name of the test is explicit.
  - The test file contains tests for each of the function use cases.
  - The test is testing one action only.
  - The test can fail.
*/
describe('[Component] <Video />', () => {
  it('should be a test with an explicit name', () => {
    const props = {
      intl: {
        formatMessage: jest.fn(),
      },
    };
    const wrapper = shallow(<Video {...props} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
