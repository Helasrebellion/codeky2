import React, { useEffect, useState } from 'react';
import ProgressWithImage from './ProgressWithImage';
import ImageGallery from './ImageGallery';
import Footer from './Footer';
import './index.css';

const LandingPage = ({ imageUrls }) => {
  const [showContent, setShowContent] = useState(false);
  const presetValues = [100, 80, 100, 15, 100, 40, 30, 45, 50, 60];
  
  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.getElementById('content');
      const contentPosition = contentElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (contentPosition < screenPosition) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Crafting Meaningful Experiences Through Technology!</h1>
          <h2>
            Whether you're a business seeking innovation or an employer looking
            to hire, let's collaborate to bring your vision to life. Get in
            touch with me today!
          </h2>
          <a
            href="https://helasrebellion.github.io/contact.html"
            className="contact-button"
          >
            Contact Me!
          </a>
        </div>
      </div>

      <div id="content" className={showContent ? 'show-content' : ''}>
        <h3>{/* Master of Code: Forging Full-Stack Mastery Through Training! */}</h3>
        <div className="progress-bars-container">
          {presetValues.map((value, index) => (
            <ProgressWithImage
              key={index}
              value={value}
              imageUrl={imageUrls[index]}
            />
          ))}
        </div>

        <h3>{/* Showcasing Exceptional Work and Creativity */}</h3>
        <ImageGallery />
      </div>

      <h3>{/* Stay Connected: Follow Me on Github! */}</h3>
      <Footer />
    </div>
  );
};

export default LandingPage;
