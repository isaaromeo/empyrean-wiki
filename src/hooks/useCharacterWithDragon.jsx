import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useCharacterWithDragon() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = localStorage.getItem("characters");
        if (!charactersData) {
          throw new Error("There is no character data in cache");
        }

        const characters = JSON.parse(charactersData);
        const foundCharacter = characters.find((c) => c._id === id);
        if (!foundCharacter) {
          throw new Error(`There is no character with ID: ${id}`);
        }
        setCharacter(foundCharacter);

        if (foundCharacter.dragon) {
          const dragonsData = localStorage.getItem("dragons");
          if (dragonsData) {
            const dragons = JSON.parse(dragonsData);
            let foundDragon = null;//foundDragon puede ser string o array

            if (Array.isArray(foundCharacter.dragon)) {
              foundDragon = dragons.filter((d) =>
                foundCharacter.dragon.includes(d.name)
              );
            }

            else if (typeof foundCharacter.dragon === "string") {
              foundDragon = dragons.find(
                (d) => d.name === foundCharacter.dragon
              );
            }

            setDragon(foundDragon);
          }
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { character, dragon, loading};
}
