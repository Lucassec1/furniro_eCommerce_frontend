import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from './presentation/styles/global';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './presentation/pages/Home';
import Product from './presentation/pages/Product';
import Header from './presentation/components/header';
import ProductDetail from './presentation/pages/ProductDetail';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/about"><About /></Route> */}
            {/* <Route path="/contact"><Contact /></Route> */}
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Product />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  </>,
);

reportWebVitals();
