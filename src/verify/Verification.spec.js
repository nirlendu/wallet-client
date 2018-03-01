// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Verification } from './Verification';

describe('Verification process', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Verification />);
  });

  it('Should show verification process component', () => {
    expect(component);
  });
});
