// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../ui';

const WrappedContent = styled.div`
  padding: 3em;
  margin-bottom: 10vh;
`;

const Content = styled.div`
  height: 90vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #02bda5;
`;

const ButtonWithLink = PrimaryButton.extend`
  margin-top: 44px;
  a {
    color: white;
  }
`;

const List = styled.ul`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  text-align: left;
  color: #4a4a4a;
  padding-top: 1vh;
  padding-left: 4vw;
`;

const ListItem = styled.li`
  padding-top: 1vh;
`;

export const ThirdScreen = () => (
  <Content>
    <WrappedContent>
      <Heading>How to get started</Heading>
      <List>
        <ListItem>Sign up for free</ListItem>
        <ListItem>Order your card</ListItem>
        <ListItem>Deposit funds</ListItem>
      </List>
      <ButtonWithLink>
        <Link to="/">Get Started</Link>
      </ButtonWithLink>
    </WrappedContent>
  </Content>
);

export default ThirdScreen;