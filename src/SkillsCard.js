import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  minHeight: 310,
});

const SkillsCard = (props) => {
    return (
      <StyledCard>
        <CardContent>
          <Grid container spacing={2} justifyContent="center">
            <Grid item width={'auto'} height={'70%'}>
              <img src={require(`${props.card.src}`)} alt={props.card.alt} width={'150'} height={'150'} />
            </Grid>
          </Grid>
          <Typography variant="h5" component="div">
            {props.card.title}
          </Typography>
          <Typography variant="body2">
            {props.card.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </StyledCard>
    );
};
export default SkillsCard;
