import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './MenuBar.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import EscalatorIcon from '@mui/icons-material/Escalator';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

import AboutMe from './AboutMe';
import Home from './Home';

const theme = createTheme();

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <EscalatorIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              <Link to={`${process.env.PUBLIC_URL}/`}>shu8Cream</Link>
            </Typography>
            <Typography variant="h7" color="inherit" sx={{ my: 1, mx: 2.5 }} noWrap>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
            </Typography>
            <Typography variant="h7" color="inherit" sx={{ my: 1, mx: 1 }} noWrap>
              skills
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
