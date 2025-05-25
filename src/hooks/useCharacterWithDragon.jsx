import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useCharacterWithDragon() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Obtener el personaje
        const charactersData = localStorage.getItem("characters");
        if (!charactersData) {
          throw new Error("No hay datos de personajes en caché");
        }

        const characters = JSON.parse(charactersData);
        const foundCharacter = characters.find((c) => c._id === id);
        if (!foundCharacter) {
          throw new Error(`Personaje con ID ${id} no encontrado`);
        }
        setCharacter(foundCharacter);

        // 2. Obtener el dragón asociado (si existe)
        if (foundCharacter.dragon) {
          const dragonsData = localStorage.getItem("dragons");
          if (dragonsData) {
            const dragons = JSON.parse(dragonsData);

            // Manejar diferentes formatos de dragon en el personaje
            let foundDragon = null;

            // Caso 1: dragon es un array de nombres
            if (Array.isArray(foundCharacter.dragon)) {
              foundDragon = dragons.filter((d) =>
                foundCharacter.dragon.includes(d.name)
              );
            }
            // Caso 2: dragon es un string (nombre único)
            else if (typeof foundCharacter.dragon === "string") {
              foundDragon = dragons.find(
                (d) => d.name === foundCharacter.dragon
              );
            }
            // Caso 3: referencia por ID (dragon_id)
            else if (foundCharacter.dragon_id) {
              foundDragon = dragons.find(
                (d) => d._id === foundCharacter.dragon_id
              );
            }

            setDragon(foundDragon);
          }
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { character, dragon, loading, error };
}
