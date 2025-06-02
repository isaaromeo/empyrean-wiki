import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useDragonWithCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dragonsData = localStorage.getItem("dragons");
        if (!dragonsData) {
          throw new Error("There is no character data in cache");
        }

        const dragons = JSON.parse(dragonsData);
        const foundDragon = dragons.find((c) => c._id === id);
        if (!foundDragon) {
          throw new Error(`There is no character with ID: ${id}`);
        }
        setDragon(foundDragon);

        if (foundDragon.bonded_rider) {
          const charactersData = localStorage.getItem("characters");
          if (charactersData) {

            const characters = JSON.parse(charactersData);
            const foundCharacter = characters.find(
                (c) => c.name === foundDragon.bonded_rider
              );

            setCharacter(foundCharacter);
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { dragon, character, loading};
}
