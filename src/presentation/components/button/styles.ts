import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Button as ButtonMUI } from '@mui/material';

export interface ButtonProps {
  variant: 'outlined' | 'contained';
}

export const ButtonAction = styled(ButtonMUI)<ButtonProps>`
  color: ${colors.$golden} !important;
  border: ${(props) =>
    props.variant === 'outlined'
      ? `1px solid ${colors.$golden} !important`
      : 'none !important'};
  background-color: ${colors.$white} !important;
  &:hover {
    background-color: ${(props) =>
      props.variant === 'contained' ? 'grey' : 'lightgrey'};
  }
  text-transform: none !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-radius: 0px !important;
  max-width: ${(props) => (props.variant === 'contained' ? '202px' : '246px')};
  padding: ${(props) =>
    props.variant === 'outlined'
      ? '9px 77px !important'
      : '12px 56px !important'};
`;
