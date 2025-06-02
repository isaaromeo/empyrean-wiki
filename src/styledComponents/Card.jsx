import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";

const CardContainer = styled.div`
  width: 320px;
  border-radius: 8px;
  overflow: hidden;
  justify-self: center;
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
  @media (max-width: 500px) {
    max-width: 90%;
  }
`;

const CardTitle = styled.h3`
  padding: 16px;
  margin: 0;
  font-size: 1.4rem;
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

const CardTable = styled.table`
  width: 100%;
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

const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${({ status, theme }) =>
    status === "Alive"
      ? theme.aliveColor
      : status === "Deceased"
      ? theme.deceasedColor
      : theme.unknownColor};
`;

const ColorIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${({ color }) =>
    color === "Iridiscent"
      ? `radial-gradient(circle,rgba(133, 237, 230, 1) 0%, rgba(164, 123, 199, 1) 65%)`
      : color.toLowerCase()};
`;

const CompactList = styled.ul`
  margin: 0;
  padding-left: 16px;
  list-style-type: none;
`;

const CompactListItem = styled.li`
  margin-bottom: 4px;
`;

const Card = ({ element, cardType}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${cardType.toLowerCase()}s/${element._id}`);
  };
  
    

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
                                                                                                                                                                                                                                    
     const cardInfo =
       cardType === "Dragon"
         ? {
             Age: element.age,
             Status: (
               <>
                 <StatusIndicator status={element.status} />
                 {element.status}
               </>
             ),
             Color: (
               <>
                 <ColorIndicator color={element.color} />
                 {element.color}
               </>
             ),
             "Tail Type": element.tail,
             Location: element.location,
             "Bonded Rider": element.bonded_rider || "None",
             "Appears In": formatArray(element.appearances),
           }
         : {
             Age: element.age,
             Status: (
               <>
                 <StatusIndicator status={element.status} />
                 {element.status}
               </>
             ),
             Location: element.location,
             Role: element.role,
             Dragons: formatArray(element.dragon),
             Occupation: formatArray(element.occupation),
             "Appears in": formatArray(element.appearances),
           };


  


  return (
    <CardContainer onClick={handleClick}>
      <CardTitle>{element.name}</CardTitle>
      <CardImage
        src={element.image_url}
        alt={element.name}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/320x250?text=Dragon+Image";
        }}
      />
      <CardTable>
        <tbody>
          {Object.entries(cardInfo).map(([key, value]) => (
            <TableRow key={key}>
              <KeyCell>{key}</KeyCell>
              <ValueCell>{value}</ValueCell>
            </TableRow>
          ))}
        </tbody>
      </CardTable>
    </CardContainer>
  );
};

export default React.memo(Card);
