import React, { useEffect, useState } from 'react';
import './Header.css';
import Navbar from './Navbar';
import Logo from './Logo';
import Socials from './Socials';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Logo />
      <Navbar />
      <Socials />
    </header>
  );
}

export default Header;
