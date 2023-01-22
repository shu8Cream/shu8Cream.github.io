import React from 'react';
import EscalatorIcon from '@mui/icons-material/Escalator';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material' 

const AboutMe = () => {
  document.title = 'AboutMe | shu8Cream';
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
          <Typography variant="h5" align="center" component="div">
            メンテナンス中...
          </Typography>
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
}

export default AboutMe;
