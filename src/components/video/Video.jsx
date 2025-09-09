import React, { useRef, useEffect, useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const Video = ({ demoVideo, stopOtherVideos }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Intersection Observer optimized for mobile
  const { ref, inView } = useInView({
    threshold: 0.85, // ✅ Play only when 85% visible
    rootMargin: "50px 0px", // ✅ Smooth preload
    triggerOnce: false,
  });

  // Play / Pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause when out of view
    if (!inView && !video.paused) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    // If visible, request other videos to pause
    if (inView) {
      stopOtherVideos(videoRef); // ✅ Ensures only ONE video plays
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [inView, stopOtherVideos]);

  // Toggle play/pause on click
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      stopOtherVideos(videoRef);
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute/unmute
  const handleMuteToggle = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        aspectRatio: "9 / 16",
        margin: "16px auto",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#000",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
      }}
    >
      <video
        ref={videoRef}
        src={demoVideo}
        playsInline
        muted={isMuted}
        loop
        preload="metadata"
        onClick={handleVideoClick}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Play Icon Overlay */}
      {!isPlaying && inView && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "40px",
            pointerEvents: "none",
            textShadow: "0px 0px 8px rgba(0,0,0,0.7)",
          }}
        >
          ▶
        </div>
      )}

      {/* Mute / Unmute Button */}
      <button
        onClick={handleMuteToggle}
        style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          fontSize: "26px",
          filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.7))",
        }}
      >
        {isMuted ? <HiVolumeOff size={19} /> : <HiVolumeUp size={19} />}
      </button>
    </div>
  );
};

export default Video;
