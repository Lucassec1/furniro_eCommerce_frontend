import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Box, Typography, CardContent, Card } from '@mui/material';
import { CardActionArea } from '@mui/material';

export interface IBadgeProps {
  color: string;
}

export const CardContentHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const CardContainer = styled(Card)`
  border-radius: 0 !important;
  box-shadow: none !important;
`;

export const CardAction = styled(CardActionArea)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${colors.$gray};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 0.5;
  }

  &:hover ${CardContentHover} {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardContentInfo = styled(CardContent)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.$white2} !important;
  gap: 8px;
  padding: 16px;
`;

export const CardTitle = styled(Typography)`
  font-size: 24px !important;
  font-weight: 600 !important;
  line-height: 28.8px !important;
  color: ${colors.$gray};
`;

export const CardTag = styled(Typography)`
  font-weight: 500 !important;
  color: ${colors.$lightGray};
`;

export const BoxCardPrice = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardPrice = styled(Typography)`
  font-size: 20px !important;
  font-weight: 600 !important;
  line-height: 30px !important;
  color: ${colors.$gray};
`;

export const CardOldPrice = styled(Typography)`
  color: ${colors.$lightGray2};
  text-decoration: line-through;
`;

export const Badge = styled.span<IBadgeProps>`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  background-color: ${(props) => props.color};

  font-weight: 500;
  color: ${colors.$white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardButtonsAction = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-weight: 600;
  color: ${colors.$white};
`;
