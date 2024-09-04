import React, { useEffect, useState } from "react";
import "./hero.css";

const HeroSection = () => {
  const images = [
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/3.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/N11.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10000ms = 10s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    
    <div className="hero-section">
      <div className="logo1"></div>
      <div className="logo2"></div>
      {images.map((image, index) => (
        <div
        key={index}
        className={`slide ${index === currentIndex ? "active" : ""}`}
        style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    <div className="maintext">
      <p>Welcome To</p>
      <p>Shri Sai Baba Aadarsh Mahavidyalaya</p>
      <p>A Post Graduate College</p>
      <p>Permanently Affiliated to Sant Gahira Guru Vishwavidyalaya,Ambikapur, Chhattisgarh.</p>
      <p>Recognized by Chhattisgarh State Government,NCTE & University Grants Commission [Under Sec. 2(f)]
      </p>
      <p>Accredited By NAAC B++ An ISO 14001-2015 & 2009-2015 Certified College
      </p>
      <p>Banaras Road, Digma, Ambikapur, District-Surguja,Chhattisgarh</p>
    </div>
    </div>
    <div className="Shadow-div"></div>
      </>
    
  );
};

export default HeroSection;
