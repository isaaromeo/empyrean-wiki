import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaUsers, FaDragon, FaBook, FaEllipsisV, FaEllipsisH } from "react-icons/fa";

const NavContainer = styled.nav`
  background: radial-gradient(
    circle,
    rgba(212, 190, 144, 0.07) 0%,
    rgba(189, 166, 146, 0.27) 28%,
    rgba(131, 107, 150, 0.67) 100%
  );
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
  border-radius: 15px;
`;

const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    gap: 1rem;
    justify-content: space-around;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.5rem 0;
    justify-content: space-around;
  }
`;

const ListItem = styled.li`
  position: relative;
  margin: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.primaryText};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
    background: rgba(255, 158, 128, 0.1);
  }

  &.active {
    color: ${({ theme }) => theme.accentColor};
    background: rgba(255, 158, 128, 0.15);

    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background: ${({ theme }) => theme.accentColor};
      border-radius: 2px;
    }
  }

  @media (max-width: 900px) {
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    padding: 0.8rem;
    font-size: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

    &.active {
      &::before {
        display: none;
      }
      background: rgba(255, 158, 128, 0.2);
      border: 1px solid ${({ theme }) => theme.accentColor};
    }
  }
`;

const NavText = styled.span`
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  font-size: 1.2rem;
  padding-top: 6px;
  @media (max-width: 700px) {
    display: block;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <StyledList>
        <ListItem>
          <StyledNavLink to="/" exact activeClassName="active">
            <MobileIcon>
              <FaHome />
            </MobileIcon>
            <NavText>Home</NavText>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/books" activeClassName="active">
            <MobileIcon>
              <FaBook />
            </MobileIcon>
            <NavText>Books</NavText>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/characters" activeClassName="active">
            <MobileIcon>
              <FaUsers />
            </MobileIcon>
            <NavText>Characters</NavText>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/dragons" activeClassName="active">
            <MobileIcon>
              <FaDragon />
            </MobileIcon>
            <NavText>Dragons</NavText>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/more" activeClassName="active">
            <MobileIcon>
              <FaEllipsisH />
            </MobileIcon>
            <NavText>More</NavText>
          </StyledNavLink>
        </ListItem>
      </StyledList>
    </NavContainer>
  );
};

export default NavBar;
