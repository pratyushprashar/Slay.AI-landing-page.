import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles = {
    border: "none",
    borderRadius: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  };

  const variants = {
    primary: {
      background: "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
      color: "var(--text-primary)",
      boxShadow: "0 8px 25px var(--glow-blue)",
    },
    secondary: {
      background: "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))",
      color: "var(--text-primary)",
      boxShadow: "0 8px 25px var(--glow-purple)",
    },
    glass: {
      background: "var(--dark-glass)",
      backdropFilter: "blur(20px)",
      border: "1px solid var(--glass-border)",
      color: "var(--text-primary)",
    },
  };

  const sizes = {
    sm: { padding: "12px 20px", fontSize: "14px" },
    md: { padding: "16px 28px", fontSize: "16px" },
    lg: { padding: "20px 40px", fontSize: "18px" },
  };

  const buttonStyle = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "translateY(-2px)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "translateY(0)";
  };

  return (
    <button
      style={buttonStyle}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transition: "left 0.5s",
          zIndex: 1,
        }}
        className="shine-effect"
      />
    </button>
  );
};

export default Button;
