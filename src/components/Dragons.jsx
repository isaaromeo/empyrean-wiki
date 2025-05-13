import React, { useEffect, useState } from "react";

const Dragons = () => {
  const [Dragons, setDragons] = useState([])
  useEffect(() => {
    const getDragons = async () =>{
      const dragons = await fetch(
        "https://empyrean-api.onrender.com/api/dragons"
      );

      const dragonsJson = await dragons.json()
      return dragonsJson
    }

    getDragons().then((dragons) => setDragons(dragons))
  })
  
  return (
    <>
    <h1>This is the Dragons page</h1>
    <div>
      {Dragons.map((c) => (
        <div key={c.id}>
        <h2>{c.name}</h2>
        <img src={c.image_url} alt={c.name}></img>
        </div>
      ))}
    </div>
    </>
  );
};

export default Dragons;
