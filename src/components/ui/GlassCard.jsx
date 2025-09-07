import React, { useState } from "react";

const GlassCard = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "lg",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: {
      background: "rgba(22, 23, 45, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
    },
    purple: {
      background:
        "linear-gradient(135deg, var(--dark-glass), rgba(139, 92, 246, 0.1))",
      border: "1px solid rgba(139, 92, 246, 0.2)",
      boxShadow: "0 15px 60px var(--glow-purple)",
    },
    blue: {
      background:
        "linear-gradient(135deg, var(--dark-glass), rgba(0, 212, 255, 0.1))",
      border: "1px solid rgba(0, 212, 255, 0.2)",
      boxShadow: "0 15px 60px var(--glow-blue)",
    },
    pink: {
      background:
        "linear-gradient(135deg, var(--dark-glass), rgba(255, 0, 128, 0.1))",
      border: "1px solid rgba(255, 0, 128, 0.2)",
      boxShadow: "0 15px 60px var(--glow-pink)",
    },
  };

  const paddings = {
    sm: "20px",
    md: "32px",
    lg: "40px",
    xl: "60px",
  };

  const cardStyle = {
    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",
    borderRadius: "24px",
    padding: paddings[padding],
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    transform: isHovered && hover ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
    ...variants[variant],
  };

  const shimmerStyle = {
    position: "absolute",
    top: 0,
    left: isHovered && hover ? "100%" : "-100%",
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
    transition: "left 0.8s",
    pointerEvents: "none",
    zIndex: 1,
  };

  return (
    <div
      style={cardStyle}
      className={`glass-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      <div style={shimmerStyle} className="shimmer-effect" />
    </div>
  );
};

export default GlassCard;
