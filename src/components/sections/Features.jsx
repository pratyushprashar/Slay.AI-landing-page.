import React, { useRef } from "react";
import GlassCard from "../ui/GlassCard";
// import pic1 from "../pic/img1.webp";
// import pic2 from "../pic/img2.webp";
// import pic3 from "../pic/img3.webp";
import Video from "../video/Video";
import v1 from "../pic/1.webm";
import v2 from "../pic/2.webm";
import v3 from "../pic/3.webm";

const Features = () => {
  const videoRefs = useRef([]);
  const features = [
    {
      title: " Style DNA 🧬 Stop Guessing Your Vibe Forever",
      benefit:
        "Upload once, unlock infinite confidence. AI reads your body, skin, face—creates your personal style blueprint. Zero creepy data collection.",
      icon: "🧬",
      demoVideo: v1,
      variant: "purple",
    },
    {
      title: " Personalized Feed ✨ Swipe Only Fire, Skip the Flop",
      benefit:
        "Your feed serves looks made for YOUR wallet, vibe, and mood—no random stuff you'll never wear. Every swipe = something you'd actually rock. End endless scrolling, start instant outfit wins" ,
      icon: "✨",
      demoVideo: v2,
     
      variant: "blue",
    },
    {
      title: "Virtual Try-On 🎭 See Before You Regret",
      benefit:
        "Photorealistic try-ons so accurate, you'll do a double-take. See exactly how you'll look before spending a rupee. Zero this doesn't look like the pic  moments, maximum shopping confidence.",
      icon: "🎭",
      demoVideo: v3,
     
      variant: "pink",
    },
  ];

  const titleStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 900,
    marginBottom: "24px",
    background:
      "linear-gradient(135deg, var(--text-primary), var(--neon-purple))",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const benefitStyle = {
    fontSize: "20px",
    color: "var(--text-secondary)",
    marginBottom: "20px",
    lineHeight: 1.7,
  };

    const stopOtherVideos = (currentRef) => {
    videoRefs.current.forEach((ref) => {
      if (ref !== currentRef && ref.current) {
        ref.current.pause();
      }
    });
  };

  return (
    <section
      style={{ padding: "120px 0", position: "relative" }}
      className="features"
    >
      <div className="container">
        {features.map((feature, index) => (
          <div key={index} className="feature-grid">
            <div className="feature-text">
              <h2 style={titleStyle}>{feature.title}</h2>
              <p style={benefitStyle}>{feature.benefit}</p>
            </div>

            <GlassCard
  variant={feature.variant}
  className="feature-visual"
  style={{
    height: "700px",
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: index % 2 === 0 ? "translateX(200px)" : "translateX(-20px)", // ✅ Alternate directions
    
  }}
>
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px",
        overflow: "hidden",
        maxWidth: "100%",
       
      }}
    >
      {/* <img
        src={feature.img}
        alt="Feature"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      /> */}
      <Video demoVideo={feature.demoVideo} key={index}
          stopOtherVideos={stopOtherVideos}
          ref={(el) => (videoRefs.current[index] = el)} />
    </div>
  </div>

  <style>
    {` 
      @media (min-width: 1024px) {
            .feature-0 {
              transform: translateX(200px);
            }
            .feature-1 {
              transform: translateX(100px);
            }
            .feature-2 {
              transform: translateX(200px);
            }
          }

           /* ✅ Disable transform on tablets & mobiles */
          @media (max-width: 1023px) {
            .feature-visual {
              transform: none !important;
            }
          }


      /* Make GlassCard responsive on small devices */
      @media (max-width: 768px) {
        .feature-visual {
          width: 400px !important; /* Reduce width for tablets & small screens */
          height: 800px !important; /* Adjust height */
           transform: none 
          
        }
      }

        @media (max-width: 480px) {
        .feature-visual {
          width: 350px !important; /* Even smaller for mobile */
          height: 650px !important;
          transform:none, 
        }
      }
        @media (max-width: 375px) {
  .feature-visual {
    width: 320px !important; /* Even smaller width */
    height: 600px !important; /* Reduce height */
    transform: none;
  }
}
    `}
  </style>
</GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
