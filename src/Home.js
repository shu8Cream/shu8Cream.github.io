import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import EscalatorIcon from '@mui/icons-material/Escalator';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import './MenuBar.css';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const Home = () => {
  return (
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
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to shu8Cream's Portfolio 
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">About me</Button>
            <Button variant="outlined">Skills</Button>
          </Stack>
        </Container>
      </Box>
    </main>
    {/* Footer */}
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        <TwitterIcon sx={{ mr: 2 }} />
        <GitHubIcon sx={{ mr: 2 }} />
        <EscalatorIcon sx={{ mr: 2 }} />
      </Typography>
    </Box>
    {/* End footer */}
    </ThemeProvider>
  );
};
export default Home;
