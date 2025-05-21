import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../styledComponents/Card.jsx";

const DragonDetail = () => {

  const { id } = useParams();
  const [dragon, setDragon] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("dragons");

    if (data) {
      try {
        const dragonsData = JSON.parse(data);
        const foundDragon = dragonsData.find((c) => c._id === id);
        setDragon(foundDragon);

      } catch (error) {
        console.error("Error getting data:", error);
      }
    }
  }, [id]);

  return (
    <div>
      {dragon ? (
        <div>
          <Card element={dragon} cardType="Dragon" />
          <p>{dragon.bio}</p>
        </div>
      ) : (
        <div>Cargando...</div>
      )}

      <div></div>
    </div>
  );
};

export default DragonDetail;
