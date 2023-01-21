import EscalatorIcon from '@mui/icons-material/Escalator';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link as MuiLink } from '@mui/material'
import { styled } from '@mui/system';

import ReactLogo from './img/react.svg'
import MuiLogo from './img/material-ui.svg'
import SkillsList from './SkillsList';

const Skills = () => {
  document.title = 'Skills';
  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <SkillsList title="Frontend..." category="Frontend" />
        <SkillsList title="Backend..." category="Backend" />
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
export default Skills;
