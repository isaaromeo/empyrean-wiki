import styled from "styled-components";
import { useElemInfo } from "../hooks/useElemInfoP";
import { useApiData } from "../hooks/useApiData";
import { useCharacterWithDragon } from "../hooks/useCharacterWithDragon";
import Rating from "../styledComponents/Rating";


// Componentes de estilo
const DetailContainer = styled.div`
  width: 85%;
  max-width: 1400px;
  justify-self: center;
  margin: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.containerBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BookInfoContainer = styled.div`
  width: 60%;
  max-height: 450px;
  min-with: 450px;
  margin: 6px;
  display: flex;
  flex-directio: column;
  justify-content: center;
  background: ${({ theme }) => theme.containerBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(54, 43, 65, 0.81);
  @media (max-width: 1500px) {
    width: 95%;
  }
  
`;

const BookHeader = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 5rem;
    align-items: center;
    justify-content: center; 
    gap: 1rem;
  }
`;

const BookImage = styled.img`
  width: 330px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 900px) {
    width: 95%;
    max-height: 400px;
  }
    
`;

const BookInfo = styled.div`
  width: 100%;
  max-height:85%;
  
`;
const TitleContainer = styled.div`
  
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.quoteBackground};
  box-shadow: 0 4px 6px rgba(51, 44, 58, 0.62);
`;
const BookName = styled.h1`
  font-size: 2.3rem;
  margin: 0;
  justify-self: center;
  color: ${({ theme }) => theme.primaryText};
  @media (max-width: 550px) {
    font-size: 2rem;
  }
  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  @media (max-width: 550px) {
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.sectionTitle};
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 0.5rem;
  @media (max-width: 550px) {
    margin-bottom: 0.7rem;
  }
`;

const BioParagraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
`;

const BookTable = styled.table`
  width: 100%;
  height:100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.cardBackground};
`;


const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.tableOddRow};
  }
`;

const KeyCell = styled.td`
  padding: 10px 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};
  width: 30%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const ValueCell = styled.td`
  padding: 10px 12px;
  color: ${({ theme }) => theme.secondaryText};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const CompactList = styled.ul`
  margin: 0;
  padding-left: 16px;
  list-style-type: none;
`;

const CompactListItem = styled.li`
  margin-bottom: 4px;
`;

const BookDetail = () => {
  const { element: book, loading } = useElemInfo("book");
  console.log(book);

  if (loading) return <div>Cargando...</div>;
  if (!book) return <div>Book no encontrado</div>;

  const formatArray = (array) => {
    if (!array || array.length === 0) return "None";
    return (
      <CompactList>
        {array.map((item, index) => (
          <CompactListItem key={index}>{item}</CompactListItem>
        ))}
      </CompactList>
    );
  };

  const bookInfo =
        {
             Author: book.author,
             "Publishing date": book.publish_date,
             Publisher: book.publisher,
             Pages: book.pages,
             Genres: formatArray(book.genres),
             Rating: book.rating
           }
 
  return (
    <DetailContainer>
      <BookHeader>
        <BookImage
          src={book.cover}
          alt={book.name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x400?text=Character+Image";
          }}
        />
        <BookInfoContainer>
          <BookInfo>
            <TitleContainer>
              <BookName>{book.name}</BookName>
            </TitleContainer>
            <BookTable>
              <tbody>
                {Object.entries(bookInfo).map(([key, value]) => (
                  <TableRow key={key}>
                    <KeyCell>{key}</KeyCell>
                    <ValueCell>
                      {key === "Rating" ? <Rating value={value}> </Rating>: value}
                    </ValueCell>
                  </TableRow>
                ))}
              </tbody>
            </BookTable>
          </BookInfo>
        </BookInfoContainer>
      </BookHeader>

      {book.synopsis.length > 0 && (
        <Section>
          <SectionTitle>Synopsis</SectionTitle>
          {book.synopsis.map((paragraph, index) => (
            <BioParagraph key={`bio-${index}`}>{paragraph}</BioParagraph>
          ))}
        </Section>
      )}

      {book.summary.length > 0 && (
        <Section>
          <SectionTitle>Summary</SectionTitle>
          {book.summary.map((paragraph, index) => (
            <BioParagraph key={`bio-${index}`}>{paragraph}</BioParagraph>
          ))}
        </Section>
      )}
    </DetailContainer>
  );
};

export default BookDetail;