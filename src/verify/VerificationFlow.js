// @flow
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavigationDots, Progress } from '../ui';
import {
  CARD_ORDER_INTRO_ROUTE,
  CARD_ORDER_PROFILE_ROUTE,
  CARD_ORDER_ADDRESS_ROUTE,
  CARD_ORDER_ID_VERIFICATION_ROUTE,
  CARD_ORDER_ADDRESS_VERIFICATION_ROUTE,
} from './constants';

export const BottomRow = styled.div`
  position: relative;
  bottom: 30px;
  width: 100%;
  display: flex;
`;

export const NavigationDotsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrappedContent = styled.div`
  padding-top: 61px;
  margin-left: 34px;
  margin-right: 49px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BackLink = styled.span`
  padding-bottom: 4px;
  margin-left: 35px;
  font-size: 14px;
  text-align: left;
  color: #a1a1a1;
`;

const stepComponents = [
  'Intro',
  'Profile',
  'AddressComponent',
  'IdVerification',
  'AddressVerification',
  'Confirm',
];

const backButtonRoutes = [
  CARD_ORDER_INTRO_ROUTE,
  CARD_ORDER_PROFILE_ROUTE,
  CARD_ORDER_ADDRESS_ROUTE,
  CARD_ORDER_ID_VERIFICATION_ROUTE,
  CARD_ORDER_ADDRESS_VERIFICATION_ROUTE,
];

const getActiveStepIndex = (WrappedComponent: *): number => {
  return stepComponents.findIndex(component => {
    if (WrappedComponent.displayName) {
      return (
        WrappedComponent.displayName === component ||
        WrappedComponent.displayName.includes(`(${component})`)
      );
    }
    return false;
  });
};

export const verificationFlow = (WrappedComponent: *) => {
  const flow = (props: any) => {
    const count = stepComponents.length;
    const activeIndex = getActiveStepIndex(WrappedComponent);
    return (
      <Container>
        {props.progress && <Progress />}
        <WrappedContent>
          <WrappedComponent {...props} />
        </WrappedContent>
        <div>
          <NavigationDotsContainer>
            <NavigationDots count={count} activeIndex={activeIndex} />
          </NavigationDotsContainer>
          {activeIndex > 0 && (
            <BottomRow>
              <Link id="back-link" to={backButtonRoutes[activeIndex - 1]}>
                <BackLink>Back</BackLink>
              </Link>
            </BottomRow>
          )}
        </div>
      </Container>
    );
  };
  const mapStateToProps: MapStateToProps<*, *, *> = state => ({
    progress: state.page.showProgress,
  });

  const connectedFlow = connect(mapStateToProps)(flow);
  connectedFlow.displayName = `cardOrderFlow(${WrappedComponent.name})`;

  return connectedFlow;
};

export default verificationFlow;
