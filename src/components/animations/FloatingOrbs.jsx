import React from 'react';

const FloatingOrbs = () => {
  return (
    <div className="floating-orbs">
      {/* Blue orb */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--glow-blue), transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      />
      
      {/* Pink orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, var(--glow-pink), transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse',
          opacity: 0.4,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;