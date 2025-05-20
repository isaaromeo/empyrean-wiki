import { useApiData } from "../hooks/useApiData.js";
import CardGrid from "../styledComponents/CardGrid.jsx";

const Characters = () => {
  const characters = useApiData(
    "https://empyrean-api.onrender.com/api/characters",
    "characters"
  );

  return (
    <div>
      <CardGrid cards={characters} cardType="Character" />
    </div>
  );
};
export default Characters;