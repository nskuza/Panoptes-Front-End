/* eslint
  func-names: 0,
  import/no-extraneous-dependencies: ["error", { "devDependencies": true }]
  prefer-arrow-callback: 0,
  "react/jsx-boolean-value": ["error", "always"]
*/

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Background from './Background';

const MOCK_SRC = '../../../../../assets/default-project-background.jpg';

describe('Background', function () {
  it('should render without crashing', function () {
    shallow(<Background src={''} />);
  });

  it('should be hidden from screen readers', function () {
    const wrapper = shallow(<Background src={MOCK_SRC} />);
    expect(wrapper.prop('aria-hidden')).to.equal('true');
  });
});