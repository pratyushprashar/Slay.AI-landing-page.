import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi"


const Video = ({demoVideo}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // ✅ Mute state

  // Intersection Observer hook
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% is visible
    triggerOnce: false, // Re-run when visibility changes
  });

  // Autoplay when video is visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      // Force autoplay after small delay
      const timer = setTimeout(() => {
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Autoplay blocked, click required:", err);
            setIsPlaying(false);
          });
      }, 100);

      return () => clearTimeout(timer);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [inView]);

    // Toggle mute/unmute
  const handleMuteToggle = (e) => {
    e.stopPropagation(); // ✅ Prevents triggering play/pause
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle click to toggle play/pause
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "360px",
        aspectRatio: "9/16", // Perfect vertical video ratio
        margin: "20px auto",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#000",
        cursor: "pointer",
      }}
    >
      {inView ? (
        <video
          ref={videoRef}
          src={demoVideo}
          playsInline
          muted
          loop
          preload="metadata"
          onClick={handleVideoClick}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            cursor: "pointer",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#e5e7eb",
            animation: "pulse 1.5s infinite",
          }}
        ></div>
      )}

      {/* Play / Pause Overlay Icon */}
      {!isPlaying && inView && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "28px",
            pointerEvents: "none",
          }}
        >
          ▶
        </div>
      )}


      {/* Mute/Unmute button */}
       <button
        onClick={handleMuteToggle}
        style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          background: "transparent", // ✅ No background
          border: "none",
          color: "#fff",
          fontSize: "26px",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.7))", // ✅ Better visibility
        }}
      >
        {isMuted ? <HiVolumeOff size={19} /> : <HiVolumeUp size={19} />}
      </button>
    </div>
  );
};

export default Video;
