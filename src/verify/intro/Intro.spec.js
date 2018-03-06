// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Intro } from './Intro';
import { PrimaryButton, Button } from '../../ui';
import { CARD_ORDER_PROFILE_ROUTE } from '../constants';
import { routes } from '../../router';

jest.mock('../cardOrderApi', () => ({
  hasOrder: jest.fn(() => Promise.resolve(false)),
}));

describe('Card ordering flow Intro', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Intro />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('can proceed to next page', () => {
    expect(
      component
        .find(Link)
        .find({ to: CARD_ORDER_PROFILE_ROUTE })
        .find(PrimaryButton).length,
    ).toBe(1);
  });

  it('can exit flow', () => {
    expect(
      component
        .find(Link)
        .find({ to: routes.LOGOUT })
        .find(Button).length,
    ).toBe(1);
  });
});
