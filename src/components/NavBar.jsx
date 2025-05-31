import React, { useState } from "react";
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
  border-radius: 5px;
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
  cursor: pointer;

  &:hover {
    color: rgb(218, 213, 203);
    background: linear-gradient(
      1deg,
      rgba(163, 131, 95, 0.38) 0%,
      rgba(176, 150, 94, 0.04) 49%,
      rgba(189, 169, 92, 0) 100%
    );
    transform: translateY(-2px);
  }

  &.active {
    color: rgb(218, 213, 203);
    background: linear-gradient(
      1deg,
      rgba(163, 131, 95, 0.38) 0%,
      rgba(176, 150, 94, 0.04) 49%,
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
      background: rgba(212, 174, 103, 0.58);
      border-radius: 3px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const DropdownMenu = styled.ul`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(112, 96, 130, 0.9);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  border-radius: 6px;
  min-width: 160px;
  z-index: 10;

  @media (max-width: 768px) {
    position: static;
    background: none;
  }
`;

const DropdownItem = styled.li`
  padding: 0;

  a {
    display: block;
    padding: 0.5rem 1rem;
    color: #e6e6e6;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 768px) {
    a {
      padding-left: 2rem;
    }
  }
`;

const NavBar = () => {
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  return (
    <NavContainer>
      <StyledList>
        <ListItem>
          <StyledNavLink to="/" exact="true" activeClassName="active">
            <span>Home</span>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink
            as="div"
            onClick={() => setShowBooksDropdown(!showBooksDropdown)}
          >
            <span>Books ▾</span>
          </StyledNavLink>
          <DropdownMenu visible={showBooksDropdown}>
            <DropdownItem>
              <NavLink to="/books/6836456935899cfa20bf5017">
                Fourth Wing
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/books/6836456935899cfa20bf5018">Iron Flame</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/books/6836456935899cfa20bf5019">Onyx Storm</NavLink>
            </DropdownItem>
          </DropdownMenu>
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
          <StyledNavLink
            as="div"
            onClick={() => setShowMoreDropdown(!showMoreDropdown)}
          >
            <span>More ▾</span>
          </StyledNavLink>
          <DropdownMenu visible={showMoreDropdown}>
            <DropdownItem>
              <NavLink to="/about">About</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/contact">Contact</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </ListItem>
      </StyledList>
    </NavContainer>
  );
};

export default NavBar;
