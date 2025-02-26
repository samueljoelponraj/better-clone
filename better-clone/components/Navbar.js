import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    width: 100%;
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>BetterClone</Logo>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
      <NavLinks open={menuOpen}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/mortgage-calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
        <Link href="/start" onClick={() => setMenuOpen(false)}>Get Started</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
