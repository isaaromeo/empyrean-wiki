import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useElemInfo(elemType) {
  const { id } = useParams();
  const [element, setElement] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(elemType);

    if (data) {
      try {
        const elementsData = JSON.parse(data);
        const foundElement = elementsData.find((e) => e._id === id);
        setElement(foundElement);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    }
  }, [id, elemType]);


  return element;
}


