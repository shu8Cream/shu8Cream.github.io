import { Typography, Container, Grid } from "@mui/material";
import SkillsCard from "./SkillsCard";
import { skillsCards } from "./skillsData";

const getCategorizedCards = (targetCategory) => {
  const categorizedCards = skillsCards.filter((card) => card.category === targetCategory);
  return categorizedCards;
};

const SkillsList = (props) => {
  const cardList = getCategorizedCards(props.category);

  return (
    <Container>
      <Typography variant="h5" component="div">
        {props.title}
      </Typography>
      <Grid container spacing={2}>
        {cardList ? (
          cardList.map((card) => {
            return (
              <Grid item xs={4}>
                <SkillsCard key={card.id} card={card} />
              </Grid>
            );
          })
        ) : (
          <div>カードなし</div>
        )}
      </Grid>
    </Container>
  );
};
export default SkillsList;
