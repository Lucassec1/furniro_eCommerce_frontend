import React from 'react';
import { ReactComponent as Trophy } from '../../assets/trophy-icon.svg';
import { ReactComponent as Guarantee } from '../../assets/guarantee-icon.svg';
import { ReactComponent as Shipping } from '../../assets/shipping-icon.svg';
import { ReactComponent as CustomerSupport } from '../../assets/customer-support-icon.svg';
import { Container } from '@mui/material';
import {
  BackgroundContainer,
  FeatureContainer,
  ContentContainer,
  InfoContainer,
  Title,
  SupportingText,
} from './styles';

const Feature: React.FC = () => {
  const feature = [
    {
      image: <Trophy />,
      title: 'High Quality',
      text: 'crafted from top materials',
    },
    {
      image: <Guarantee />,
      title: 'Warranty Protection',
      text: 'Over 2 years',
    },
    {
      image: <Shipping />,
      title: 'Free Shipping',
      text: 'Order over 150 $',
    },
    {
      image: <CustomerSupport />,
      title: '24 / 7 Support',
      text: 'Dedicated support',
    },
  ];

  return (
    <BackgroundContainer>
      <Container maxWidth="xl">
        <FeatureContainer>
          {feature.map((item, index) => {
            return (
              <ContentContainer key={index}>
                {item.image}
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <SupportingText>{item.text}</SupportingText>
                </InfoContainer>
              </ContentContainer>
            );
          })}
        </FeatureContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default Feature;
