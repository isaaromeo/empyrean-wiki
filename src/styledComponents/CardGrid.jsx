import styled from "styled-components";
import CharacterCard from "./CharacterCard.jsx";
import DragonCard from "./DragonCard.jsx";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 24px;
  padding: 20px;
  justify-items: center;
  background: linear-gradient(
    90deg,
    rgba(82, 71, 94, 0.76) 0%,
    rgba(72, 60, 84, 0.24) 49%,
    rgba(93, 83, 102, 0) 100%
  );
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
