import React from "react";
import Button from "../ui/Button";
import PhoneMockup from "../ui/PhoneMockup";
import FloatingOrbs from "../animations/FloatingOrbs";
import pic4 from "../pic/pic4.png";

const Hero = ({ onCtaClick }) => {
  const heroStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "140px 0 100px",
    position: "relative",
    overflow: "hidden",
  };

  const titleStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: "clamp(3rem, 6vw, 5rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "24px",
    background:
      "linear-gradient(135deg, var(--text-primary), var(--neon-blue))",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const benefitStyle = {
    fontSize: "22px",
    color: "var(--text-secondary)",
    marginBottom: "40px",
    fontWeight: 500,
  };

  return (
    <section style={heroStyle} className="hero">
      <FloatingOrbs />

      <div className="container">
        <div className="hero-grid">
          <div>
            <h1 style={titleStyle}>Never Have an Ugly Day Again</h1>
            <p style={benefitStyle}>
              AI builds your Style DNA from one pic, curates fire fits for your
              vibe, and shows you looking absolutely unreal.
            </p>
            <Button variant="primary" size="lg" onClick={onCtaClick}>
              Join the hype ✨
            </Button>
          </div>

          <div
            className="phone-wrapper"
          >
            <PhoneMockup>
              <div
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: "100%",
                  height: "800px",
                  maxWidth: "100%",
                }}
              >
                <img
                  src={pic4}
                  alt="Feature"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </PhoneMockup>

            <style>
              {`
  .phone-wrapper {
    transform: translateX(120px);
    transition: transform 0.3s ease;
  }

  /* ✅ Disable transform on small devices */
  @media (max-width: 768px) {
    .phone-wrapper {
      transform: translateX(5px);
    }
  }
`}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
