import styled from "styled-components";
import { useApiData } from "../hooks/useApiData";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.containerBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primaryText};
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Cinzel";
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.sectionTitle};
  margin: 1.5rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.5rem;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.quoteBackground};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 900px) {
    padding: 1rem;
    border-radius: 8px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 0.5rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primaryText};
`;

const FeaturedSection = styled.div`
  margin: 3rem 0;
`;

const FeaturedGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
`;

const FeaturedItem = styled.div`
  display: flex;
  background: ${({ theme }) => theme.signetBackground};
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.accentColor};

  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FeaturedImage = styled.img`
  width: 60%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const BookMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 40%;
  height: 350px;
  margin-left: 1.2rem;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-content: center;
  overflow-x: hidden;

  @media (max-width: 500px) {
    display:none;
  }
`;

const MetaItem = styled.span`
  background: ${({ theme }) => theme.tagBackground};
  padding: 0.5rem 1rem;
  width: 80%;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.tagText};
  @media (max-width: 900px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 20px;
    margin: 0.2rem;
    width:90%;
  }
`;

const Section = styled.section`
  margin-bottom: 1rem;
  gap: 0.5rem;
  
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.sectionTitle};
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 0.5rem;
  
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
  justify-self: center;
  
`;

const Genre = styled.span`
  background: ${({ theme }) => theme.containerBackground};
  padding: 0.5rem 1rem;
  width: 70%;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primaryText};
  @media (max-width: 900px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 20px;
    margin: 0.2rem;
    width: 90%;
  }

`;

const Books = () => {
 
  const books = useApiData(
    "https://empyrean-api.onrender.com/api/books",
    "books"
  );

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <HomeContainer>
      <Description>
        Welcome to the heart of the Empyrean world — the books that started it
        all. Written by Rebecca Yarros, the Empyrean series is a gripping blend
        of fantasy, romance, and high-stakes adventure, set in a brutal world
        where dragon riders are forged in fire. So far, the saga includes three
        published books:
      </Description>
      <StatsContainer>
        <StatCard>
          <StatNumber>Fourth Wing</StatNumber>
          <StatLabel>(2023)</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>Iron Flame</StatNumber>
          <StatLabel>(2023)</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>Onyx Storm</StatNumber>
          <StatLabel>(2025)</StatLabel>
        </StatCard>
      </StatsContainer>
      <Description>
        The series is planned as a five-book saga, meaning two more books are
        still on the horizon. Each installment delves deeper into the politics
        of Navarre, the secrets of Basgiath War College, and deadly threats. 🔥
        Fun Fact: Fourth Wing sold over 500,000 copies in its first four weeks
        and was printed with black sprayed edges and a hidden dragon design —
        making early editions highly collectible. Whether you're here to catch
        up on lore, revisit key plot points, or explore character arcs, this
        section is your go-to hub for everything book-related in the Empyrean
        universe.
      </Description>

      <FeaturedSection>
        <Subtitle>Books</Subtitle>
        <FeaturedGrid>
          {books.map((book) => (
            <FeaturedItem key={book._id} onClick={() => handleClick(book._id)}>
              <FeaturedImage
                src={book.cover}
                alt={book.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Character+Image";
                }}
              />

              <BookMeta>
                <MetaItem>Author: {book.author}</MetaItem>
                <MetaItem>Date: {book.publish_date}</MetaItem>
                <MetaItem>Rating: {book.rating}</MetaItem>

                {book.genres.length > 0 && (
                  <Section>
                    <SectionTitle>Genres</SectionTitle>
                    <GenreList>
                      {book.genres.map((g) => (
                        <Genre key={g}>{g}</Genre>
                      ))}
                    </GenreList>
                  </Section>
                )}
              </BookMeta>
            </FeaturedItem>
          ))}
        </FeaturedGrid>
      </FeaturedSection>

      <Description>
        Dive deeper into the world of Empyrean by exploring our detailed
        sections on characters, dragons, and lore. Use the navigation above to
        discover more.
      </Description>
    </HomeContainer>
  );
};

export default Books;
