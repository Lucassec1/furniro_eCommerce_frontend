import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { colors } from '../../styles/colors';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ListItem } from '@mui/material';

export const AppBarHeader = styled(AppBar)`
  background-color: ${colors.$white} !important;
  box-shadow: none !important;
`;

export const HeaderNavigation = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
`;

export const BoxLogo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TypographyHeader = styled(Typography)`
  color: ${colors.$black};
  font-size: 2.125rem !important;
  font-weight: 700 !important;
  font-family: 'Montserrat', sans-serif !important;
`;

export const BoxNav = styled(Box)`
  display: flex;
  gap: 4.5rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
`;

export const TypographyHeaderNav = styled(Typography)<{ selected?: boolean }>`
  color: ${colors.$black};
  font-size: 1rem !important;
  font-weight: 500 !important;
  cursor: pointer;
  transition: all 0.3s;

  color: ${(props) => (props.selected ? colors.$golden : colors.$black)};

  &:hover {
    color: ${colors.$golden};
  }
`;

export const BoxAction = styled(Box)`
  display: flex;
  gap: 2.8rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

export const DrawerNav = styled.div`
  width: 300px;
`;

export const ListItemNav = styled(ListItem)`
  display: flex;
  gap: 1rem;
`;
