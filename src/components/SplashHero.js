"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./SplashHero.css";
import Navbar from "./Navbar";
import homeData from "@/data/home/homeData";

// Inline style for overlay fade (can move to CSS file if preferred)
const overlayFadeStyles = `
.splash-gradient-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  transition: background 20.2s cubic-bezier(0.4,0,0.2,1);
}
.splash-gradient-overlay.dark {
  background: #000 !important;
}
.splash-gradient-overlay.light {
  background: linear-gradient(180deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.2) 100%);
}
`;

export default function SplashHero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const data = homeData.splash;

  const [pauseTrail, setPauseTrail] = useState(false);
  const [showText, setShowText] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeText, setActiveText] = useState("subheading"); // Start with subheading
  const [textAnimate, setTextAnimate] = useState(true); // Start animated
  const [isVisible, setIsVisible] = useState(true); // Track visibility

  // Overlay fade state
  const [overlayLight, setOverlayLight] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOverlayLight(true), 20); // Start fade almost immediately
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => setPauseTrail(true), 3000);
    setTimeout(() => setShowText(true), 3500);
    
    // Hide subHeading, reset animation, then show tagLine
    setTimeout(() => {
      setActiveText(null);
      setTextAnimate(false);
    }, 3500);
    
    setTimeout(() => {
      setActiveText("tagline");
      setTextAnimate(true);
    }, 3510);
    
    // Hide tagLine before video starts
    setTimeout(() => setActiveText(null), 6500);
    
    setTimeout(() => setZoomOut(true), 5200);
    setTimeout(() => setShowVideo(true), 7000);
  }, []);

  /* 🔹 Pause/Resume video based on visibility */
  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          // More than 50% visible - resume video
          videoRef.current?.play();
          setIsVisible(true);
        } else {
          // Less than 50% visible - pause video
          videoRef.current?.pause();
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible/hidden
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [showVideo]);

  return (
    <section className="splash-root" ref={sectionRef}>
      {/* Inject overlay fade styles */}
      <style>{overlayFadeStyles}</style>
      <Navbar transparent />

      {/* 🔹 MARQUEE TRAILS */}
      {!zoomOut && (
        <div className={`marquee-wrapper ${pauseTrail ? "paused fade-up" : ""}`}>
          {/* ...existing code... */}
          <div className="marquee-band top">
            <div className="marquee left">
              {data.images.marqueeTop.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Splash ${index + 1}`}
                  loading="lazy"
                  onError={(e) => console.log('Image load error:', e)}
                />
              ))}
            </div>
          </div>
          <div className="marquee-band middle">
            <div className="marquee right">
              {data.images.marqueeMiddle.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Middle ${index + 1}`}
                  loading="lazy"
                  onError={(e) => console.log('Image load error:', e)}
                />
              ))}
            </div>
          </div>
          <div className="marquee-band bottom">
            <div className="marquee left">
              {data.images.marqueeBottom.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Bottom ${index + 1}`}
                  loading="lazy"
                  onError={(e) => console.log('Image load error:', e)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🔹 MAIN IMAGE */}
      {!showVideo && (
        <div className={`image-stage ${zoomOut ? "zoom-out" : ""}`}>
          <Image
            src={data.images.mainImage}
            alt="Splash"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* GRADIENT OVERLAY FADES FROM BLACK TO LIGHT */}
      <div
        className={`splash-gradient-overlay ${overlayLight ? "light" : "dark"}`}
      />

      {/* 🔹 TEXT */}
      <div className={`splash-text ${showText ? "show" : ""}`}>
        {activeText === "subheading" && (
          <p className={`tagline animate-item ${textAnimate ? "animate" : ""}`}>{data.text.subHeading}</p>
        )}

        {activeText === "tagline" && (
          <p className={`tagline animate-item ${textAnimate ? "animate" : ""}`}>
            {data.text.tagLine}
          </p>
        )}
      </div>

      {/* 🔹 BACKGROUND VIDEO */}
      {showVideo && (
        <video
          ref={videoRef}
          className="splash-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={data.video.src}
            type={data.video.type}
          />
        </video>
      )}
    </section>
  );
}
