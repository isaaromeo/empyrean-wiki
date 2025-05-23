import { useState, useEffect } from "react";

export function useElemInfo(elemType, elemName) {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(elemType);

    if (data) {
      try {
        const elementsData = JSON.parse(data);
        const foundElement = elementsData.find((e) => e.name === elemName);
        setElement(foundElement);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    }
  }, [elemName, elemType]);


  return element;
}


