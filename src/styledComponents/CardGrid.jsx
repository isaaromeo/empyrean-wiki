import styled from "styled-components";
import Card from "./Card.jsx";


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: ${({ theme }) => theme.containerBackground};
  border-radius: 8px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const CardGrid = ({cards, cardType}) => {
  return (
    <CardContainer>
      {cards.map((c) => (
        <Card element={c} cardType={cardType}/>))
      }
    </CardContainer>
  );
};

export default CardGrid;
