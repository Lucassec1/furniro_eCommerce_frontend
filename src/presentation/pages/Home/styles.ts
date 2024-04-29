import styled from 'styled-components';
import Background from '../../assets/background.png';
import { colors } from '../../styles/colors';

export const FullScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: url(${Background}) no-repeat center center;
  background-size: cover;
`;

export const BannerContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 100px;
  width: 650px;
  height: 420px;
  border-radius: 10px;
  background-color: ${colors.$white5};

  @media (max-width: 768px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    width: 470px;
    height: 380px;
  }

  @media (max-width: 480px) {
    width: 380px;
    height: 320px;
  }
`;

export const BannerContent = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.$gray2};

  padding: 86px 50px 0px 50px;
`;

export const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  padding-top: 106px;
`;

export const RangeContainerTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  color: ${colors.$gray2};
`;

export const RangeContainerContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const RangeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RangeTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: ${colors.$gray2};
  text-align: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 56px 0 68px 0;
`;

export const ProductContainerTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: ${colors.$gray};
  text-align: center;
`;

export const ProductContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 285px);
  grid-gap: 32px;
  justify-content: center;
`;
