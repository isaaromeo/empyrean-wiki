import React, { useEffect, useState } from "react";
import CardGrid from "../styledComponents/CardGrid.jsx";
const Dragons = () => {
  const [dragons, setDragons] = useState([])
  useEffect(() => {
    const getDragons = async () =>{
      const dragons = await fetch(
        "https://empyrean-api.onrender.com/api/dragons"
      );

      const dragonsJson = await dragons.json()
      return dragonsJson
    }

    getDragons().then((dragons) => setDragons(dragons))
  }, [])
  
  return (
    <>
      <h1>This is the Dragons page</h1>
      <div>
        {<CardGrid elements={dragons} cardType={"Dragon"} />}
      </div>
    </>
  );
};

export default Dragons;
