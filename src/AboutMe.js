import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import EscalatorIcon from '@mui/icons-material/Escalator';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import './MenuBar.css';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         shu8Cream
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <EscalatorIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/">shu8Cream</Link>
          </Typography>
          <Typography variant="h7" color="inherit" sx={{ my: 1, mx: 2.5 }} noWrap>
            <Link to="/about">About</Link>
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
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {/* Something here to give the footer a purpose! */}
        </Typography>
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

// export default AboutMe;
