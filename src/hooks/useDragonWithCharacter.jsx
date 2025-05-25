import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useDragonWithCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Obtener el personaje
        const dragonsData = localStorage.getItem("dragons");
        if (!dragonsData) {
          throw new Error("No hay datos de personajes en caché");
        }

        const dragons = JSON.parse(dragonsData);
        const foundDragon = dragons.find((c) => c._id === id);
        if (!foundDragon) {
          throw new Error(`Personaje con ID ${id} no encontrado`);
        }
        setDragon(foundDragon);

        // 2. Obtener el dragón asociado (si existe)
        if (foundDragon.bonded_rider) {
          const charactersData = localStorage.getItem("characters");
          if (charactersData) {
            const characters = JSON.parse(charactersData);

            // Manejar diferentes formatos de character en el personaje
            let foundCharacter = null;

            // Caso 2: dragon es un string (nombre único)
            if (typeof foundDragon.bonded_rider === "string") {
              foundCharacter = characters.find(
                (d) => d.name === foundDragon.bonded_rider
              );
            }

            setCharacter(foundCharacter);
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

  return { dragon, character, loading, error };
}
