import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { useApiData } from "../hooks/useApiData";

const PathContainer = styled.nav`
  display: flex;
  width:110%;
  align-items: center;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  z-index: 10;
  @media (max-width: 500px) {
    padding-left: 0;
    font-size: 0.8rem;
  }
`;

const PathItem = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.tagText};
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
      text-decoration: underline;
    }
  }

  span {
    color: ${({ theme }) => theme.tagText};
    margin: 0 0.5rem;
  }
`;

const Path = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((p) => p);

  const characters = useApiData(
    "https://empyrean-api.onrender.com/api/characters",
    "characters"
  );
  const books = useApiData(
    "https://empyrean-api.onrender.com/api/books",
    "books"
  );
  const dragons = useApiData(
    "https://empyrean-api.onrender.com/api/dragons",
    "dragons"
  );

  const getItemNameById = (type, id) => {
    let collection;
    switch (type) {
      case "characters":
        collection = characters;
        break;
      case "books":
        collection = books;
        break;
      case "dragons":
        collection = dragons;
        break;
      default:
        return id;
    }
    
    const item = collection.find((item) => item._id === id);
    return item ? item.name : id;
  };

  return (
    <PathContainer label="Path">
      <PathItem>
        <Link to="/">
          <FaHome />
        </Link>
        <FaChevronRight size={12} />
      </PathItem>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Determinar si el segmento actual es un ID (asumiendo que es un ObjectId de MongoDB)
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(name);
        const previousSegment = index > 0 ? pathnames[index - 1] : null;

        // Mostrar el nombre del item si es un ID y el segmento anterior es un tipo conocido
        const displayName =
          isObjectId &&
          ["characters", "books", "dragons"].includes(previousSegment)
            ? getItemNameById(previousSegment, name)
            : name

        return (
          <PathItem key={name}>
            {isLast ? (
              <span>{displayName}</span>
            ) : (
              <>
                <Link to={routeTo}>{displayName}</Link>
                <FaChevronRight size={12} />
              </>
            )}
          </PathItem>
        );
      })}
    </PathContainer>
  );
};

export default React.memo(Path);
