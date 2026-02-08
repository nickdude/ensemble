"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./SplashHero.css";
import Navbar from "./Navbar";
import homeData from "@/data/home/homeData";

export default function SplashHero() {
  const videoRef = useRef(null);
  const data = homeData.splash;

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

      {/* GRADIENT */}
      <div className="splash-gradient-overlay" />

      {/* 🔹 TEXT */}
      <div className={`splash-text ${showText ? "show" : ""}`}>
        <p className="tagline animate-item">{data.text.subHeading}</p>

        <h1 className="heading heading-title animate-item">
          <span className="underline">{data.text.underlineHeading}</span> {data.text.heading}
        </h1>

        <p className="tagline animate-item">
          {data.text.tagLine}
        </p>

        <div className="arrow-overlay-splash animate-item">
          <img src={data.images.arrow} className="w-10" alt="Up Arrow" loading="lazy" onError={(e) => console.log('Arrow icon load error:', e)} />
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
            src={data.video.src}
            type={data.video.type}
          />
        </video>
      )}
    </section>
  );
}
