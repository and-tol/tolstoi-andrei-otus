import React from 'react';
import { shallow } from 'enzyme';

import { Hello } from './Hello';

describe('Write name check', () => {
  it('should render a document title', () => {
    expect(shallow(<Hello username="Ivan" />).text()).toEqual(
      'Hello World, Ivan!',
    );
  });
});
