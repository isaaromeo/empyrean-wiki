import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  background: linear-gradient(
    90deg,
    rgba(112, 96, 130, 0.76) 0%,
    rgba(103, 83, 122, 0.24) 49%,
    rgba(93, 83, 102, 0) 100%
  );
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const ListItem = styled.li`
  position: relative;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: #e6e6e6;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: rgb(218, 213, 203);
    background: linear-gradient(
      0deg,
      rgba(181, 173, 80, 0.29) 0%,
      rgba(189, 169, 92, 0) 100%
    );
    transform: translateY(-2px);
  }

  &.active {
    color: rgb(218, 213, 203);
    background: linear-gradient(
      0deg,
      rgba(181, 173, 80, 0.29) 0%,
      rgba(189, 169, 92, 0) 100%
    );

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 3px;
      background: rgb(212, 183, 103);
      border-radius: 3px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <StyledList>
        <ListItem>
          <StyledNavLink to="/" exact activeClassName="active">
            <span>Home</span>
            
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/characters" activeClassName="active">
            <span>Characters</span>
            
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/dragons" activeClassName="active">
            <span>Dragons</span>
            
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/lore" activeClassName="active">
            <span>Lore</span>
            
          </StyledNavLink>
        </ListItem>
      </StyledList>
    </NavContainer>
  );
};

export default NavBar;
