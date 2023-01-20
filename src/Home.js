import React from 'react';
import Button from '@mui/material/Button';
import EscalatorIcon from '@mui/icons-material/Escalator';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material' 

const Home = () => {
  document.title = 'shu8Cream';
  return (
    <div>
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
          <Button variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/about`}>About me</Button>
          <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/skills`}>Skills</Button>
        </Stack>
      </Container>
    </Box>
     {/* Footer */}
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        <MuiLink href="https://twitter.com/shu8Cream" target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={{ mr: 2 }} />
        </MuiLink>
        <MuiLink href="https://github.com/shu8Cream" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ mr: 2 }} />
        </MuiLink>
        <EscalatorIcon sx={{ mr: 2 }} />
      </Typography>
    </Box>
    {/* End footer */}
  </div>
  );
};
export default Home;
