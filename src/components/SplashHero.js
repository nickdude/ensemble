"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./SplashHero.css";
import Navbar from "./Navbar";

export default function SplashHero() {
  const videoRef = useRef(null);

  const [pauseTrail, setPauseTrail] = useState(false);
  const [showText, setShowText] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => setPauseTrail(true), 3000);
    setTimeout(() => setShowText(true), 3400);
    setTimeout(() => setZoomOut(true), 5200);
    setTimeout(() => setShowVideo(true), 7000);
  }, []);

  /* 🔹 Pause video on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      window.removeEventListener("scroll", handleScroll);
    };

    if (showVideo) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showVideo]);

  return (
    <section className="splash-root">
      <Navbar transparent />

      {/* 🔹 MARQUEE TRAILS */}
      {!zoomOut && (
        <div className={`marquee-wrapper ${pauseTrail ? "paused fade-up" : ""}`}>
          <div className="marquee-band top">
            <div className="marquee left">
              <img src="/assets/splash/top/1.svg" alt="Splash 1" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/top/2.svg" alt="Splash 2" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/top/3.svg" alt="Splash 3" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/top/4.svg" alt="Splash 4" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
            </div>
          </div>

          <div className="marquee-band middle">
            <div className="marquee right">
              <img src="/assets/splash/middle/1.svg" alt="Middle 1" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/middle/main.svg" alt="Middle Main" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/middle/2.svg" alt="Middle 2" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
            </div>
          </div>

          <div className="marquee-band bottom">
            <div className="marquee left">
              <img src="/assets/splash/bottom/1.svg" alt="Bottom 1" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/bottom/2.svg" alt="Bottom 2" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/bottom/3.svg" alt="Bottom 3" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
              <img src="/assets/splash/bottom/4.svg" alt="Bottom 4" loading="lazy" onError={(e) => console.log('Image load error:', e)} />
            </div>
          </div>
        </div>
      )}

      {/* 🔹 MAIN IMAGE */}
      {!showVideo && (
        <div className={`image-stage ${zoomOut ? "zoom-out" : ""}`}>
          <Image
            src="/assets/splash.png"
            alt="Splash"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* GRADIENT */}
      <div className="splash-gradient-overlay" />

      {/* 🔹 TEXT */}
      <div className={`splash-text ${showText ? "show" : ""}`}>
        <p className="tagline animate-item">inspiring tomorrow</p>

        <h1 className="heading heading-title animate-item">
          <span className="underline">SPACES</span> FOR EXCELLENCE
        </h1>

        <p className="tagline animate-item">
          Future-ready spaces for thriving businesses
        </p>

        <div className="arrow-overlay-splash animate-item">
          <img src="/assets/icons/up_arrow.svg" className="w-10" alt="Up Arrow" loading="lazy" onError={(e) => console.log('Arrow icon load error:', e)} />
        </div>
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
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
      )}
    </section>
  );
}
