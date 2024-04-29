import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as User } from '../../assets/user-icon.svg';
import { ReactComponent as Search } from '../../assets/search-icon.svg';
import { ReactComponent as Favorite } from '../../assets/favorite-icon.svg';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart-icon.svg';
import {
  AppBarHeader,
  HeaderNavigation,
  BoxLogo,
  TypographyHeader,
  BoxNav,
  TypographyHeaderNav,
  BoxAction,
  DrawerNav,
} from './styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Container,
  Drawer,
  useMediaQuery,
  IconButton,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const location = useLocation();
  let currentRoute = location.pathname.split('/')[1];
  currentRoute = capitalizeFirstLetter(currentRoute);

  const routes = ['Home', 'Shop', 'About', 'Contact'];
  const icons = [
    { name: 'Login/Register', icon: <User cursor="pointer" /> },
    { name: 'Search', icon: <Search cursor="pointer" /> },
    { name: 'Favorites', icon: <Favorite cursor="pointer" /> },
    { name: 'Shopping Cart', icon: <ShoppingCart cursor="pointer" /> },
  ];

  const [selectedRoute, setSelectedRoute] = useState(currentRoute || 'Home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  function capitalizeFirstLetter(route: string) {
    return route.charAt(0).toUpperCase() + route.slice(1);
  }

  const drawer = (
    <DrawerNav>
      <List>
        {isMobile && (
          <>
            {routes.map((route) => (
              <ListItem button key={route}>
                <TypographyHeaderNav>{route}</TypographyHeaderNav>
              </ListItem>
            ))}
            <Divider />
            {icons.map((icon) => (
              <ListItem button key={icon.name}>
                {icon.icon}
                <TypographyHeaderNav sx={{ ml: 1 }}>
                  {icon.name}
                </TypographyHeaderNav>
              </ListItem>
            ))}
          </>
        )}
        {!isMobile &&
          icons.map((icon) => (
            <ListItem button key={icon.name}>
              {icon.icon}
              {isTablet && (
                <TypographyHeaderNav sx={{ ml: 1 }}>
                  {icon.name}
                </TypographyHeaderNav>
              )}
            </ListItem>
          ))}
      </List>
    </DrawerNav>
  );

  return (
    <AppBarHeader position="relative">
      <Container maxWidth="xl">
        <HeaderNavigation>
          <BoxLogo>
            <Logo />
            <TypographyHeader>Furniro</TypographyHeader>
          </BoxLogo>
          {isTablet || isMobile ? (
            <>
              {isTablet && !isMobile && (
                <BoxNav>
                  {routes.map((route) => (
                    <TypographyHeaderNav
                      key={route}
                      onClick={() => setSelectedRoute(route)}
                      selected={route === selectedRoute}
                    >
                      {route}
                    </TypographyHeaderNav>
                  ))}
                </BoxNav>
              )}
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                style={{ color: 'black' }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <BoxNav>
                {routes.map((route) => (
                  <Link
                    key={route}
                    to={route.toLowerCase()}
                    style={{ textDecoration: 'none' }}
                  >
                    <TypographyHeaderNav
                      key={route}
                      onClick={() => setSelectedRoute(route)}
                      selected={route === selectedRoute}
                    >
                      {route}
                    </TypographyHeaderNav>
                  </Link>
                ))}
              </BoxNav>
              <BoxAction>{icons.map((icon) => icon.icon)}</BoxAction>
            </>
          )}
        </HeaderNavigation>
      </Container>
    </AppBarHeader>
  );
};

export default Header;
