// @flow

import React from 'react';
import { Route } from 'react-router';
import Intro from './intro';
import verificationFlow from './VerificationFlow';
import requireAuthentication from '../requireAuthentication';
import { authenticatedPage } from '../page';
import {
  CARD_ORDER_INTRO_ROUTE,
  CARD_ORDER_PROFILE_ROUTE,
  CARD_ORDER_ADDRESS_ROUTE,
  CARD_ORDER_ID_VERIFICATION_ROUTE,
  CARD_ORDER_ADDRESS_VERIFICATION_ROUTE,
  CARD_ORDER_CONFIRM_ROUTE,
  CARD_ORDER_DONE_ROUTE,
} from './constants';

const introRoute = (
  <Route
    key={1}
    exact
    path={CARD_ORDER_INTRO_ROUTE}
    component={requireAuthentication(verificationFlow(Intro))}
  />
);

export default [introRoute];
