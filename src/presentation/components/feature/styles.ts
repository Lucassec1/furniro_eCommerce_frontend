import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const BackgroundContainer = styled.div`
  background-color: ${colors.$white4};
`;

export const FeatureContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 50px;
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.h4`
  font-size: 25px;
  font-weight: 600;
  line-height: 37.5px;
  color: ${colors.$black2};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const SupportingText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${colors.$lightGray3};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
