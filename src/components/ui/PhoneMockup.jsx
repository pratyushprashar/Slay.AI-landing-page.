import React from 'react';

const PhoneMockup = ({ children, className = '' }) => {
  return (
    <div className={`phone-container ${className}`}>
      <div
        style={{
          width: '320px',
          height: '640px',
          background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-pink))',
          borderRadius: '40px',
          padding: '12px',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), 0 0 60px var(--glow-purple)',
          animation: 'phoneFloat 6s ease-in-out infinite',
          position: 'relative'
        }}
        className="phone-mockup"
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'var(--dark-surface)',
            borderRadius: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="phone-screen"
        >
          {/* Screen glow effect */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, var(--neon-blue), transparent)',
              borderRadius: '50%',
              opacity: 0.6,
              animation: 'pulse 2s ease-in-out infinite'
            }}
            className="screen-glow"
          />
          
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;