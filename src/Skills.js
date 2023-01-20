import EscalatorIcon from '@mui/icons-material/Escalator';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as MuiLink } from '@mui/material' 

const Skills = () => {
  document.title = 'Skills';
  return (
    <div>
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
