import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For Twitter/X icon

const Footer = () => {
  const footerStyle = {
    background: 'rgba(10, 10, 15, 0.9)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '60px 0 30px'
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  };

  const brandStyle = {
    color: 'var(--text-primary)',
    fontWeight: 900,
    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };

  const socialLinks = [
    { icon: <FaXTwitter size={27} />, href: 'https://x.com/SlayAI_online' },
    { icon: <FaInstagram size={27} />, href: 'https://www.instagram.com/slayai_online?igsh=MWc1ajE2d2cwMGt4ZA==' },
    {  icon: <FaYoutube size={27} />, href: 'www.youtube.com/@SlayAI.online' },
    { icon: <FaLinkedin size={27} />, href: 'https://www.linkedin.com/company/slay-ai/' }
  ];

  return (
    <footer style={footerStyle} className="footer">
      <div className="container">
        <div style={footerContentStyle} className="footer-content">
          <div style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <span style={brandStyle}>Slay.AI</span> — Built for everyone who wants to look amazing ✨
          </div>
          
          <div  className="footer-socials" style={{ display: 'flex', gap: '24px' }}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--neon-blue)';
                  e.target.style.textShadow = '0 0 10px var(--glow-blue)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
              justifyContent:center;
              gap: 0px;
            }

            .footer-socials {
              justify-content: center;
              flex-wrap: wrap;
               text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;