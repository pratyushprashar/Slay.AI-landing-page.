import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Header = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    //  background: scrolled 
    //   ? 'rgba(10, 10, 15, 0.95)' 
    //   : 'rgba(10, 10, 15, 0.8)',
    backdropFilter: scrolled ? 'blur(25px)' : 'blur(20px)',
    // borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    zIndex: 1000,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const logoStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: '36px',
    fontWeight: 900,
    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple), var(--neon-pink))',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: 'gradientText 3s ease infinite',
    marginTop:'20px',
      transform: "translateY(20px)",
  };

  return (
    <header style={headerStyle} className="header">
      <nav className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0'
          }}
        >
          <div style={logoStyle}>Slay.AI</div>
          {/* <Button size="sm" onClick={onCtaClick}>
            Join the Hype
          </Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;