import { useApiData } from "../hooks/useApiData";
import CardGrid from "../styledComponents/CardGrid.jsx";

const Dragons = () => {
  const dragons = useApiData(
    "https://empyrean-api.onrender.com/api/dragons",
    "dragons"
  );

  return (
    <div>
      <CardGrid cards={dragons} cardType="Dragon" />
    </div>
  );
};

export default Dragons;
