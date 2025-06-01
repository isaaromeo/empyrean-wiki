import styled from "styled-components";
import { useApiData } from "../hooks/useApiData";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  width: 85%;
  max-width: 1400px;
  justify-self: center;

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primaryText};
`;

const FeaturedSection = styled.div`
  margin: 3rem 0;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`;

const FeaturedItem = styled.div`
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

const FeaturedTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 0.5rem;
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Home = () => {
  const characters = useApiData(
    "https://empyrean-api.onrender.com/api/characters",
    "characters"
  );

  const dragons = useApiData(
    "https://empyrean-api.onrender.com/api/dragons",
    "dragons"
  );

  const books = useApiData(
    "https://empyrean-api.onrender.com/api/books",
    "books"
  );

  const navigate = useNavigate();

  const handleClick = (section, id) => {
    navigate(`/${section}/${id}`);
  };

  const featuredCharacters = characters?.slice(0, 3) || [];
  const featuredDragons = dragons?.slice(0, 3) || [];

  return (
    <HomeContainer>
      <Title>Welcome to Empyrean Archive</Title>

      <Description>
        Enter the deadly and breathtaking world of The Empyrean—the bestselling
        fantasy series by Rebecca Yarros that has captivated millions with its
        high-stakes battles, dragon bonds, and unforgettable romance. Set in a
        war-torn land where only the fiercest survive, the series follows the
        trials of cadets at Basgiath War College, where future dragon riders are
        forged through discipline, sacrifice, and brutal competition.
      </Description>

      <StatsContainer>
        <StatCard>
          <StatNumber>+1M</StatNumber>
          <StatLabel>Copies sold in the first year</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>#1</StatNumber>
          <StatLabel>New York Times Bestseller</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>3/5</StatNumber>
          <StatLabel>Books in Series</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>+20</StatNumber>
          <StatLabel>Languages</StatLabel>
        </StatCard>
      </StatsContainer>

      <Description>
        The Empyrean blends fantasy, political intrigue, emotional depth, and a
        fierce cast of characters who fight not just for survival, but for the
        future of their world. This wiki is your ultimate guide—packed with
        character profiles, dragon lore, chapter summaries, theories, timelines,
        and everything else you need to master this epic saga.
      </Description>

      <FeaturedSection>
        <Subtitle>Featured Characters</Subtitle>
        <FeaturedGrid>
          {featuredCharacters.map((character) => (
            <FeaturedItem
              key={character._id}
              onClick={() => handleClick("characters", character._id)}
            >
              <FeaturedImage
                src={character.image_url}
                alt={character.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Character+Image";
                }}
              />
              <FeaturedTitle>{character.name}</FeaturedTitle>
              <p>{character.role}</p>
              <p>Age: {character.age}</p>
            </FeaturedItem>
          ))}
        </FeaturedGrid>
      </FeaturedSection>

      <FeaturedSection>
        <Subtitle>Featured Dragons</Subtitle>
        <FeaturedGrid>
          {featuredDragons.map((dragon) => (
            <FeaturedItem
              key={dragon._id}
              onClick={() => handleClick("dragons", dragon._id)}
            >
              <FeaturedImage
                src={dragon.image_url}
                alt={dragon.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Dragon+Image";
                }}
              />
              <FeaturedTitle>{dragon.name}</FeaturedTitle>
              <p>Color: {dragon.color}</p>
              <p>Age: {dragon.age}</p>
            </FeaturedItem>
          ))}
        </FeaturedGrid>
      </FeaturedSection>

      <FeaturedSection>
        <Subtitle>Books</Subtitle>
        <FeaturedGrid>
          {books.map((book) => (
            <FeaturedItem
              key={book._id}
              onClick={() => handleClick("books", book._id)}
            >
              <FeaturedImage
                src={book.cover}
                alt={book.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Character+Image";
                }}
              />
              <FeaturedTitle>{book.name}</FeaturedTitle>
              <p>Author:{book.author}</p>
              <p>Rating: {book.rating}/5</p>
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

export default Home;
