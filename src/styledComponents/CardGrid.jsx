import styled from "styled-components";
import CharacterCard from "./CharacterCard.jsx";
import DragonCard from "./DragonCard.jsx";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 24px;
  padding: 20px;
  justify-items: center;
`;

const CardGrid = ({ elements, cardType }) => {
  return (
    <GridContainer>
      {console.log(elements)}
      {cardType === "Character"
      ? elements.map((e) => (
        <CharacterCard character={e}/>))
      : elements.map((e) => (
        <DragonCard dragon={e} />
      ))}
    </GridContainer>
  );
};

export default CardGrid;
