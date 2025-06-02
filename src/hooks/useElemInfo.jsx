import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useElemInfo(elemType) {
  const { id } = useParams();
  const [element, setElement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Obtener el personaje
        const elementsData = localStorage.getItem(`${elemType}s`);
        //console.log(elementsData)
        if (!elementsData) {
          throw new Error("No element data in caché");
        }

        const elements = JSON.parse(elementsData);
        const foundElement = elements.find((c) => c._id === id);
        if (!foundElement) {
          throw new Error(`Elemento con ID ${id} no encontrado`);
        }
        setElement(foundElement);

        
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [elemType, id]);
  console.log(element)
  return { element, loading};
}


