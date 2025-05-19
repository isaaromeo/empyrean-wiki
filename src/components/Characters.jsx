import React, { useEffect, useState } from "react";
import CardGrid from "../styledComponents/CardGrid.jsx";
const Characters = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = async () =>{
      const characters = await fetch(
        "https://empyrean-api.onrender.com/api/characters"
      );

      const charactersJson = await characters.json()
      return charactersJson
    }

    getCharacters().then((characters) => setCharacters(characters))
  }, [])
  
  return (
    <>
      <div>
        {/* {characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))} */
        <CardGrid elements={characters} cardType={"Character"} />}
      </div>
    </>
  );
};

export default Characters;
