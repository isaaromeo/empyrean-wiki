import styled from "styled-components";
import { useElemInfo } from "../hooks/useElemInfo";

// Componentes de estilo
const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DragonHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DragonImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const DragonInfo = styled.div`
  flex: 1;
`;

const DragonName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primaryText};
`;

const DragonMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
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
  font-size: 1.8rem;
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
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  quotes: "\\201C""\\201D";

  &::before {
    content: open-quote;
    font-size: 2rem;
    line-height: 0;
    vertical-align: -0.4em;
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

const DragonDetail = () => {
  const dragon = useElemInfo("dragons");

  if (!dragon) {
    return <div>Cargando...</div>;
  }

  // Valores por defecto para propiedades opcionales
  const {

    occupation = [],
    bio = [],
    signet = [],
    quotes = [],
    relationships = [],
    appearances = [],
    image_url = "https://via.placeholder.com/300x400?text=Dragon+Image",
  } = dragon;

  return (
    <DetailContainer>
      <DragonHeader>
        <DragonImage
          src={image_url}
          alt={dragon.name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x400?text=Dragon+Image";
          }}
        />
        <DragonInfo>
          <DragonName>{dragon.name}</DragonName>
          <DragonMeta>
            <MetaItem>Age: {dragon.age}</MetaItem>
            <MetaItem>Status: {dragon.status || "Unknown"}</MetaItem>
            <MetaItem>Location: {dragon.location}</MetaItem>
            <MetaItem>Role: {dragon.role}</MetaItem>
          </DragonMeta>

          {dragon.length > 0 && (
            <Section>
              <SectionTitle>Dragons</SectionTitle>
              <TagList>
                {dragon.map((dragonName) => (
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
        </DragonInfo>
      </DragonHeader>

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
              <span>{rel.Dragon}</span>
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

export default DragonDetail;
