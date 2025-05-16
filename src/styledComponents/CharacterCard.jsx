import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.cardBackground};
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  margin: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  padding: 10px;
  margin: 0;
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.primaryText};
  background: ${({ theme }) => theme.cardHeaderBackground};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.tableEvenRow};
  }
`;

const KeyCell = styled.td`
  padding: 8px 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};
  width: 30%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const ValueCell = styled.td`
  padding: 8px 12px;
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

const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${({ status, theme }) => 
    status === 'Alive' ? theme.aliveColor : 
    status === 'Deceased' ? theme.deceasedColor : 
    theme.unknownColor};
`;

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/characters/${character._id}`);
  };

  // Formatear arrays para mostrarlos como listas compactas
  const formatArray = (array) => {
    if (!array || array.length === 0) return 'None';
    return (
      <CompactList>
        {array.map((item, index) => (
          <CompactListItem key={index}>{item}</CompactListItem>
        ))}
      </CompactList>
    );
  };

  // Información básica para mostrar en la tarjeta
  const characterInfo = {
    'Age': character.age,
    'Status': (
      <>
        <StatusIndicator status={character.status} />
        {character.status}
      </>
    ),
    'Location': character.location,
    'Role': character.role,
    'Dragons': formatArray(character.dragon),
    'Occupation': formatArray(character.occupation),
    'Appears in': formatArray(character.appearances),
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardTitle>{character.name}</CardTitle>
      <CardImage 
        src={character.image_url} 
        alt={character.name} 
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x250?text=No+Image';
        }}
      />
      <InfoTable>
        <tbody>
          {Object.entries(characterInfo).map(([key, value]) => (
            <TableRow key={key}>
              <KeyCell>{key}</KeyCell>
              <ValueCell>{value}</ValueCell>
            </TableRow>
          ))}
        </tbody>
      </InfoTable>
    </CardContainer>
  );
};

export default CharacterCard;