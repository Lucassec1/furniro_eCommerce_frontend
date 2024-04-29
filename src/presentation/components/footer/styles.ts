import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterContainer = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 285px;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 24px;
    flex-basis: 100%;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.$black};
  line-height: 36px;
`;

export const Address = styled.p`
  font-weight: 400;
  color: ${colors.$lightGray3};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-top: 24px;

    &:nth-child(2),
    &:nth-child(3) {
      flex-basis: 50%;
      float: left;
    }

    &:last-child {
      flex-basis: 100%;
    }

    @media (max-width: 480px) {
      flex-basis: 100%;
      margin-top: 36px;
    }
  }
`;

export const TitleContent = styled.h5`
  font-weight: 500;
  color: ${colors.$lightGray3};
`;

export const FooterList = styled.ul`
  list-style: none;

  & > li + li {
    margin-top: 46px;
  }

  @media (max-width: 768px) {
    & > li + li {
      margin-top: 20px;
    }
  }
`;

export const FooterListText = styled.li`
  font-weight: 500;
  color: ${colors.$black};
  cursor: pointer;

  &:hover {
    color: ${colors.$golden};
  }
`;

export const FooterNewsletter = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputNewsletter = styled.input`
  min-width: 200px;
  outline: none;
  border: none;
  border-bottom: 1.5px solid ${colors.$black};
  font-size: 14px;
  line-height: 21px;

  &:hover {
    border-bottom-color: ${colors.$golden};
  }

  &:focus {
    border-bottom-color: ${colors.$black2};
  }

  &::placeholder {
    color: ${colors.$lightGray3};
  }
`;

export const ButtonAction = styled.button`
  background-color: ${colors.$white};
  outline: none;
  border: none;
  border-bottom: 1.5px solid ${colors.$black};
  text-transform: uppercase;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${colors.$golden};
    border-bottom-color: ${colors.$golden};
  }

  &:focus {
    color: ${colors.$black2};
    border-bottom-color: ${colors.$black2};
  }

  &::placeholder {
    color: ${colors.$lightGray3};
  }
`;

export const FooterReserved = styled.div`
  padding: 36px 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.$lightGray4};
`;

export const TextReserved = styled.p``;
