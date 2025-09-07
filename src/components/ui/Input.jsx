import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  variant = 'glass',
  ...props 
}) => {
  const variants = {
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    },
    solid: {
      background: 'var(--dark-surface)',
      border: '2px solid var(--glass-border)'
    }
  };

  const inputStyle = {
    padding: '18px 24px',
    borderRadius: '16px',
    color: 'var(--text-primary)',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none',
    width: '100%',
    ...variants[variant]
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--neon-blue)';
    e.target.style.boxShadow = '0 0 20px var(--glow-blue)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
      className={`input input-${variant} ${className}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};

export default Input;