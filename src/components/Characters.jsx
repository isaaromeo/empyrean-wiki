import React, { useEffect, useState } from "react";

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
  })
  
  return (
    <>
    <h1>This is the characters page</h1>
    <div>
      {characters.map((c) => (
        <div key={c.id}>
        <h2>{c.name}</h2>
        <img src={c.image_url} alt={c.name}></img>
        </div>
      ))}
    </div>
    </>
  );
};

export default Characters;
