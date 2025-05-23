import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../styledComponents/Card.jsx";
import Quote from "../styledComponents/Quote.jsx";

const DetailContainer = styled.div`
  width: 80%;
  display:flex;

`;

const BioContainer = styled.div`
  width: 50%;
  font.size: 1rem;
  display: flex;
`;


const CharacterDetail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("characters");

    if (data) {
      try {
        const charactersData = JSON.parse(data);
        const foundCharacter = charactersData.find((c) => c._id === id);
        setCharacter(foundCharacter);

      } catch (error) {
        console.error("Error getting data:", error);
      }
    }
  }, [id]);


  return (
    <div>
      {character ? (
        <div>
          <Card element={character} cardType="Character" />
          <BioContainer>
            {character.bio ? (
              Array.isArray(character.bio) ? (
                character.bio.map((paragraph, index) => (
                  <p key={`bio-${index}`} className="bio-paragraph">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{character.bio}</p>
              )
            ) : (
              <p>No biography available for this character</p>
            )}
          </BioContainer>
          <div>
            <h2>{character.name}</h2>
            <Quote quotes={character.quotes} />
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}

      <div></div>
    </div>
  );
};

export default CharacterDetail;
