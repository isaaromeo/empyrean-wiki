import styled from "styled-components";
import { useApiData } from "../hooks/useApiData.jsx";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AppearancesContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 2rem;
  gap: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.signetBackground};
  justify-content: space-around;
  justify-self: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 700px) {
    gap: 1rem;
    padding: 1rem;
    margin: 1rem;
  }
`;
const BookContainer = styled.div`
  border-radius: 8px;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const BookImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 4px 6px rgba(26, 3, 49, 0.88);

`;

const BookAppearance = ({ booksNames }) => {
    const books = useApiData(
        "https://empyrean-api.onrender.com/api/books",
        "books"
      );

    const navigate = useNavigate();

    const handleClick = (section, id) => {
        navigate(`/${section}/${id}`);
      };
      
    const matchingBooks = useMemo(() => {
        if(books.length > 0){
            
            return books?.filter((book) =>
              booksNames.some((bookName) => book.name === bookName)
            );
        }
        else return [];
        
    }, [books, booksNames]);
   
  return (
    <AppearancesContainer>
      {matchingBooks.map((book) => (
        <BookContainer>
          <BookImage
            src={book.cover}
            alt={book.name}
            onClick={() => handleClick("books", book._id)}
          />
        </BookContainer>
      ))}
    </AppearancesContainer>
  );
};

export default BookAppearance;
