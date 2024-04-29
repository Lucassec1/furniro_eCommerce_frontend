import styled from 'styled-components';
import Background from '../../assets/background-2.png';

export const FullScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${Background});
    background-size: cover;
    opacity: 50%;
  }
`;

export const ContainerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
`;

export const ContainerBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const BreadcrumbSpanBold = styled.span`
  font-weight: 500;
`;

export const BreadcrumbSpan = styled.span`
  font-weight: 300;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 65px 0 85px 0;
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 285px);
  grid-gap: 32px;
  justify-content: center;
`;
