import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useElemInfo(elemType) {
  const { id } = useParams();
  const [element, setElement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const elementsData = localStorage.getItem(`${elemType}s`);
        //console.log(elementsData)
        if (!elementsData) {
          throw new Error("No element data in cache");
        }

        const elements = JSON.parse(elementsData);
        const foundElement = elements.find((c) => c._id === id);
        if (!foundElement) {
          throw new Error(`No element with ID: ${id} found`);
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
  return { element, loading};
}


