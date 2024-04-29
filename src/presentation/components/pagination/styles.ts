import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const PaginationNav = styled.nav``;

export const PaginationContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;

  & > li + li {
    margin-left: 38px;
  }

  @media (max-width: 480px) {
    & > li + li {
      margin-left: 20px;
    }
  }
`;

export const PaginationNumber = styled.button<{ selected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 10px;

  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? colors.$golden : colors.$white3};

  color: ${(props) => (props.selected ? colors.$white : colors.$black)};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;

  &:hover {
    border: 1px solid ${colors.$golden};
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

export const PaginationEllipsis = styled.button`
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${colors.$white3};

  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.875rem;
  padding: 15px 28px;

  &:hover {
    padding: 14px 27px;
    border: 1px solid ${colors.$golden};
  }

  @media (max-width: 480px) {
    padding: 9px 18px;

    &:hover {
      padding: 8px 17px;
    }
  }
`;
