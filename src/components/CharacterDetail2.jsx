import styled from "styled-components";
import { useElemInfo } from "../hooks/useElemInfo";
import { useApiData } from "../hooks/useApiData";
import { useCharacterWithDragon } from "../hooks/useCharacterWithDragon";


// Componentes de estilo
const DetailContainer = styled.div`
  width: 85%;
  max-width: 1400px;
  justify-self:center;
  margin: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CharacterInfoContainer = styled.div`
  width: 40%;
  max-height:450px;
  min-with: 450px;
  margin: 6px;
  display: flex;
  justify-content:center;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(54, 43, 65, 0.81);
  
`;

const CharacterHeader = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CharacterImage = styled.img`
  width: 330px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const DragonImage = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const CharacterInfo = styled.div`
  width: 100%;
`;
const TitleContainer = styled.div`
  margin-bottom: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.quoteBackground};
  box-shadow: 0 4px 6px rgba(51, 44, 58, 0.62);
`;
const CharacterName = styled.h1`
  font-size: 2.3rem;
  margin: 0;
  justify-self:center;
  color: ${({ theme }) => theme.primaryText};
  
`;

const CharacterMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const MetaItem = styled.span`
  background: ${({ theme }) => theme.tagBackground};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.tagText};
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.sectionTitle};
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 0.5rem;
`;

const BioParagraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
`;

const SignetCard = styled.div`
  background: ${({ theme }) => theme.signetBackground};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid ${({ theme }) => theme.accentColor};
`;

const SignetName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const SignetDescription = styled.p`
  line-height: 1.5;
`;

const QuoteCard = styled.div`
  background: ${({ theme }) => theme.quoteBackground};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  position: relative;
`;

const QuoteText = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;

  &::before {
    content: open-quote;
    font-size: 3rem;
    line-height: 0;
    vertical-align: -0.3em;
    horizontal-align: -0.3em;
    color: ${({ theme }) => theme.accentColor};
  }
  &::after {
    content: close-quote;
    font-size: 3rem;
    line-height: 0;
    vertical-align: -0.6em;
    horizontal-align: -0.3em;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const QuoteSource = styled.p`
  text-align: right;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryText};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.tagBackground};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const RelationshipItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dashed ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`;

const CharacterDetail = () => {
  // console.log("1")
  // const { character, dragon} = useElemInfo("characters");
  // console.log("2", dragon);
  
  // if (!character ) {
  //   console.log("3", dragon);
  //   return <div>Cargando...</div>;
    
  // }

  const { character, dragon, loading, error } = useCharacterWithDragon();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!character) return <div>Personaje no encontrado</div>;
  
  console.log("4", dragon);
  // Valores por defecto para propiedades opcionales
  const {
    dragonn = [],
    occupation = [],
    bio = [],
    signet = [],
    quotes = [],
    relationships = [],
    appearances = [],
  } = character;
  
  
  console.log("5", character.dragon);
  //const dragon2 = dragons.find((d) => d === character.dragon);
  

  return (
    <DetailContainer>
      <CharacterHeader>
        <CharacterImage
          src={character.image_url}
          alt={character.name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x400?text=Character+Image";
          }}
        />
        <CharacterInfoContainer>
          <CharacterInfo>
            <TitleContainer>
              <CharacterName>{character.name}</CharacterName>
            </TitleContainer>
            <CharacterMeta>
              <MetaItem>Age: {character.age}</MetaItem>
              <MetaItem>Status: {character.status || "Unknown"}</MetaItem>
              <MetaItem>Location: {character.location}</MetaItem>
              <MetaItem>Role: {character.role}</MetaItem>
            </CharacterMeta>

            {character.dragon.length > 0 && (
              <Section>
                <SectionTitle>Dragons</SectionTitle>
                <TagList>
                  {character.dragon.map((dragonName) => (
                    <Tag key={dragonName}>{dragonName}</Tag>
                  ))}
                </TagList>
              </Section>
            )}

            {occupation.length > 0 && (
              <Section>
                <SectionTitle>Occupation</SectionTitle>
                <TagList>
                  {occupation.map((job) => (
                    <Tag key={job}>{job}</Tag>
                  ))}
                </TagList>
              </Section>
            )}
          </CharacterInfo>
        </CharacterInfoContainer>

        <DragonImage
          src={dragon[0].image_url}
          alt={"map"}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x400?text=Character+Image";
          }}
        />
      </CharacterHeader>

      {bio.length > 0 && (
        <Section>
          <SectionTitle>Biography</SectionTitle>
          {bio.map((paragraph, index) => (
            <BioParagraph key={`bio-${index}`}>{paragraph}</BioParagraph>
          ))}
        </Section>
      )}

      {signet.length > 0 && (
        <Section>
          <SectionTitle>Signet Abilities</SectionTitle>
          {signet.map((ability, index) => (
            <SignetCard key={`signet-${index}`}>
              <SignetName>{ability.name}</SignetName>
              <SignetDescription>{ability.description}</SignetDescription>
            </SignetCard>
          ))}
        </Section>
      )}

      {quotes.length > 0 && (
        <Section>
          <SectionTitle>Notable Quotes</SectionTitle>
          {quotes.map((quote, index) => (
            <QuoteCard key={`quote-${index}`}>
              <QuoteText>{quote.quote}</QuoteText>
              <QuoteSource>— {quote.book}</QuoteSource>
            </QuoteCard>
          ))}
        </Section>
      )}

      {relationships.length > 0 && (
        <Section>
          <SectionTitle>Relationships</SectionTitle>
          {relationships.map((rel, index) => (
            <RelationshipItem key={`rel-${index}`}>
              <span>{rel.character}</span>
              <span>{rel.relationship}</span>
            </RelationshipItem>
          ))}
        </Section>
      )}

      {appearances.length > 0 && (
        <Section>
          <SectionTitle>Appearances</SectionTitle>
          <TagList>
            {appearances.map((book) => (
              <Tag key={book}>{book}</Tag>
            ))}
          </TagList>
        </Section>
      )}
    </DetailContainer>
  );
};

export default CharacterDetail;