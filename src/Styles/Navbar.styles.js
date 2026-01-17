import styled from "styled-components";
import { Link } from "react-router-dom";


export const Nav = styled.nav`
  height: 70px;
  padding: 0 2rem;
  background: #121212;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Montserrat', sans-serif;
`;

export const Logo = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 2px;
  color: #ff4757;
  text-decoration: none;

  &:hover {
    color: #ff6b81;
  }
`;


export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const StyledLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #f1f1f1;
  text-decoration: none;
  font-size: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: #ff4757;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #ff4757;
  }
`;


export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 0.9rem;
  width: 180px;

  &:focus {
    box-shadow: 0 0 0 2px #ff4757;
  }
`;
export const SearchButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background: #ff4757;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.1s ease;

  &:hover {
    background: #ff6b81;
  }

  &:active {
    transform: scale(0.95);
  }
`;
