// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import SocialIcons from './SocialIcons';

import variables from './variables';

const Container = styled.div`
  padding: 48px 0;
  ${breakpoint('tablet')`
    padding: 60px 0;
  `};
`;

const InnerContainer = styled.div`
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const ItemsContainer = styled.div`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  ${breakpoint('tablet')`
    display: flex;
    justify-content: center;
  `};
`;

const Item = styled.div``;

const ItemLink = styled(Link)`
  color: ${variables.colorNeutral};
  font-size: ${variables.fontSizeSmall};
  display: block;
  padding: 9px 12px;
  &:hover {
    color: ${variables.colorNeutral};
    text-decoration: none;
  }
  ${breakpoint('tablet')`
    display: inline-block;
    padding: 12px 24px;
    &:hover {
      color: ${variables.colorNeutralDark};
    }
  `};
`;

const ItemAnchor = ItemLink.withComponent('a');

const SocialContainer = styled.div`
  text-align: center;
  margin: 24px 0;
`;

const CompanyContainer = styled.div`
  text-align: center;
  padding: 9px 0;
  ${breakpoint('tablet')`
    padding: 12px 0;
  `};
`;

const Company = styled.div`
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
  white-space: nowrap;
  ${breakpoint('tablet')`
    display: inline;
  `};
`;

const LegalLink = styled.a`
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
  text-decoration: none;
  white-space: nowrap;
  display: inline;
  margin: 0 9px;
  &:hover {
    color: ${variables.colorNeutralLight};
    text-decoration: none;
  }
  ${breakpoint('tablet')`
    margin-left: 24px;
    &:hover {
      color: ${variables.colorNeutralDark};
    }
  `};
`;

const LegalText = styled.p`
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
  text-align: center;
  margin-top: 12px;
`;

export const Footer = () => (
  <Container>
    <InnerContainer>
      <ItemsContainer>
        <Item>
          <ItemLink to="/#home">Home</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/#wallet">Wallet</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/#card">Card</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/#marketplace">Marketplace</ItemLink>
        </Item>
        <Item>
          <ItemAnchor
            href="/Whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </ItemAnchor>
        </Item>
        <Item>
          <ItemLink to="/about">About</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/careers">Careers</ItemLink>
        </Item>
        <Item>
          <ItemLink to="https://support.getchange.com/" target="_blank">
            Support
          </ItemLink>
        </Item>
        <Item>
          <ItemLink to="https://medium.com/changefinance" target="_blank">
            Blog
          </ItemLink>
        </Item>
      </ItemsContainer>

      <SocialContainer>
        <SocialIcons />
      </SocialContainer>

      <CompanyContainer>
        <Company>All Rights Reserved © Liontech PTE LTD</Company>
        <LegalLink
          href="/TERMS-AND-CONDITIONS-OF-CHANGESG-v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </LegalLink>
        <LegalLink
          href="/bug-bounty.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bug Bounty
        </LegalLink>
      </CompanyContainer>
      <LegalText>
        Change is currently not authorised to provide and does not provide
        banking, payment or other financial services.
        <br />
        No financial services will be provided until the issue of a required
        operating licence by a competent financial supervision authority.
      </LegalText>
    </InnerContainer>
  </Container>
);

export default Footer;
