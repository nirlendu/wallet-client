// @flow

import React from 'react';
import { Route } from 'react-router';
import Intro from './intro';
import verificationFlow from './VerificationFlow';
import requireAuthentication from '../requireAuthentication';
import { authenticatedPage } from '../page';
import {
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_CONFIRM_ROUTE,
  VERIFICATION_DONE_ROUTE,
} from './constants';
import Profile from '../card/order/profile';

const introRoute = (
  <Route
    key={1}
    exact
    path={VERIFICATION_INTRO_ROUTE}
    component={requireAuthentication(verificationFlow(Intro))}
  />
);

const profileRoute = (
  <Route
    key={1}
    exact
    path={VERIFICATION_PROFILE_ROUTE}
    component={requireAuthentication(verificationFlow(Profile))}
  />
);

export default [introRoute, profileRoute];
