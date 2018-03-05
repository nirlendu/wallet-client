// @flow
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Header, PrimaryButton, Top, SubHeader, WrappedContent } from '../ui';
import { VERIFICATION_INTRO_ROUTE } from './constants';

export type Props = {};

type State = {
  verified: ?boolean,
};

export class Verification extends React.Component<any, State> {
  state = {
    verified: false,
  };

  render() {
    if (this.state.verified === undefined) {
      return null;
    }
    return this.state.verified ? (
      <WrappedContent>
        <div>You have completed the verification process</div>
      </WrappedContent>
    ) : (
      <Redirect to={VERIFICATION_INTRO_ROUTE} />
    );
  }
}
export default Verification;
