// LandingPage.js

import React, { useEffect, useState } from 'react';
import ProgressWithImage from './ProgressWithImage';
import ImageGallery from './ImageGallery';
import Footer from './Footer';
import './index.css';
import ContactForm from './ContactForm';
import GitHubEvents from './GitHubEvents';

const LandingPage = ({ imageUrls }) => {
  const [showContent, setShowContent] = useState(false);
  const presetValues = [100, 80, 100, 15, 100, 40, 30, 45, 50, 60];
  const yourGitHubUsername = 'Helasrebellion';

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
          <ContactForm />
        </div>
      </div>

      <div id="content" className={showContent ? 'show-content' : ''}>
        <div>
          <h1 style={{ textAlign: 'center' }}>Sylvia Mullins</h1>

          <img
            src="/Photos/shm.png"
            alt="Headshot"
            style={{
              width: '200px',
              height: '300px',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p>
            Hello, I'm Sylvia, a highly skilled and passionate full-stack developer located in the vibrant Cincinnati metropolitan area.
            From an early age, I discovered my love for web development when I created my first website as a hobby in middle school.
            Little did I know then that it would evolve into a lifelong professional pursuit.
          </p>
          <p>
            Driven by my passion, I decided to further hone my skills by pursuing formal education. In May 2022, I proudly obtained my associate's degree,
            providing me with a solid foundation in the principles and practices of web development. However, my thirst for knowledge and growth remains unquenchable,
            as I am currently on a journey towards a bachelor's degree of science in C# software development, further expanding my expertise and understanding in this dynamic field.
          </p>
          <p>
            What sets me apart is my unwavering commitment to excellence and my meticulous attention to detail. Every line of code I write is a testament to my dedication
            and passion for creating exceptional web experiences. I thrive in collaborative environments, leveraging my strong communication skills to work effectively with
            cross-functional teams and deliver outstanding results.
          </p>
          <p>
            If you are seeking a dependable professional who not only possesses technical prowess but also genuinely loves what they do,
            I invite you to reach out to me. Let's connect and discuss how I can contribute to your organization's success. I am eagerly looking
            forward to the opportunity to collaborate with like-minded individuals and create impactful digital solutions together.
          </p>
        </div>

        <h3>/* Master of Code: Forging Full-Stack Mastery Through Training! */</h3>
        <div className="progress-bars-container">
          {presetValues.map((value, index) => (
            <ProgressWithImage
              key={index}
              value={value}
              imageUrl={imageUrls[index]}
            />
          ))}
        </div>

        <h3>/* Showcasing Exceptional Work and Creativity */</h3>
        <ImageGallery />
      </div>

      <h3>/* Stay Connected: Follow Me on Github! */</h3>
      <GitHubEvents username={yourGitHubUsername} />

      <Footer />
    </div>
  );
};

export default LandingPage;
