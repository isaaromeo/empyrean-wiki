import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useElemInfo(elemType) {
  const { id } = useParams();
  const [element, setElement] = useState(null);
  const [elementRelated, setElementRelated] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(elemType);

    if (data) {
      try {
        const elementsData = JSON.parse(data);
        const foundElement = elementsData.find((e) => e._id === id);
        setElement(foundElement);
        if(elemType === "chatacters"){
          try {
            const dragonsData = localStorage.getItem("dragons");
            const dragonsJSON = JSON.parse(dragonsData);
            const foundDragon = dragonsJSON.find(
              (d) => d.name === element.dragon
            );
            setElementRelated(foundDragon)
          } catch (error) {
            console.error("Error getting data:", error);
          }
          
        
        }
      } catch (error) {
        console.error("Error getting data:", error);
      }
    }
  }, [id, elemType]);

  console.log(element, elementRelated)
  return {element, elementRelated};
}


