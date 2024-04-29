import React from 'react';
import { Container } from '@mui/material';
import {
  FooterContainer,
  AddressContainer,
  Title,
  Address,
  ContentContainer,
  TitleContent,
  FooterList,
  FooterListText,
  FooterNewsletter,
  InputNewsletter,
  ButtonAction,
  FooterReserved,
  TextReserved,
  Divider,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <FooterContainer>
        <AddressContainer>
          <Title>Furniro.</Title>
          <Address>
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </Address>
        </AddressContainer>
        <ContentContainer>
          <TitleContent>Links</TitleContent>
          <FooterList>
            <FooterListText>Home</FooterListText>
            <FooterListText>Shop</FooterListText>
            <FooterListText>About</FooterListText>
            <FooterListText>Contact</FooterListText>
          </FooterList>
        </ContentContainer>
        <ContentContainer>
          <TitleContent>Help</TitleContent>
          <FooterList>
            <FooterListText>Payment Options</FooterListText>
            <FooterListText>Returns</FooterListText>
            <FooterListText>About</FooterListText>
            <FooterListText>Privacy Policies</FooterListText>
          </FooterList>
        </ContentContainer>
        <ContentContainer>
          <TitleContent>Newsletter</TitleContent>
          <FooterNewsletter>
            <InputNewsletter placeholder="Enter Your Email Address"></InputNewsletter>
            <ButtonAction>Subscribe</ButtonAction>
          </FooterNewsletter>
        </ContentContainer>
      </FooterContainer>
      <Divider />
      <FooterReserved>
        <TextReserved>2023 furniro. All rights reverved</TextReserved>
      </FooterReserved>
    </Container>
  );
};

export default Footer;
