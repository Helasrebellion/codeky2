import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom';

const ProgressWithImage = ({ value, imageUrl }) => {
  return (
    <div className="progress-with-image">
      <img className="image-placeholder" src={imageUrl} alt="Placeholder" />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "./Photos/redball.png",
      caption: 'Red Ball',
    },
    {
      id: 2,
      src: "./Photos/lyman hall theater.png",
      caption: 'Lyman Hall Theater',
    },
    {
      id: 3,
      src: "./Photos/New Year Bash.png",
      caption: 'New Year Bash',
    },
    {
      id: 4,
      src: "./Photos/pandaisia chocolates home.png",
      caption: 'Pandaisia Chocolates',
    },
    {
      id: 5,
      src: "./Photos/sylviasbasiccalc.png",
      caption: 'Java Calculator',
    },
  ];

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div className="image-item" key={image.id}>
          <img className="zoom-image" src={image.src} alt={image.caption} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div id="footer">
      <p className="leftfooter">
        Sylvia Mullins Development © 2023 All rights reserved
      </p>
      <p className="rightfooter">
        Follow me
        <br />
        <button
          onClick={() => handleRedirect('https://github.com/Helasrebellion')}
          className="socialButton"
        >
          <img
            src={require('./Photos/github.svg').default}
            alt="githublogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>
        <button
          onClick={() =>
            handleRedirect('https://www.linkedin.com/in/sylviahela/')
          }
          className="socialButton"
        >
          <img
            src={require('./Photos/linkedin.svg').default}
            alt="linkedinlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>
        <button
          onClick={() =>
            handleRedirect('https://www.instagram.com/sylviamullinsdev/')
          }
          className="socialButton"
        >
          <img
            src={require('./Photos/instagram.svg').default}
            alt="instagramlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>
        <button
          onClick={() => handleRedirect('https://twitter.com/SylviaMDev')}
          className="socialButton"
        >
          <img
            src={require('./Photos/twitter.svg').default}
            alt="twitterlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>
      </p>
      <p className="centeredfooter">
        <img
          id="logofooter"
          src={require('./Photos/smlogo.png').default}
          alt="freelancelogo"
        />
      </p>
    </div>
  );
};

const LandingPage = ({ imageUrls }) => {
  const [showContent, setShowContent] = useState(false);

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

  const presetValues = [100, 80, 100, 15, 100, 40, 30, 45, 50, 60];

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
        <h3>//Master of Code: Forging Full-Stack Mastery Through Training!</h3>
        <div className="progress-bars-container">
          {presetValues.map((value, index) => (
            <ProgressWithImage
              key={index}
              value={value}
              imageUrl={imageUrls[index]}
            />
          ))}
        </div>
        <h3>//Showcasing Exceptional Work and Creativity</h3>
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

const App1 = () => {
  const imageUrls = [
    './Photos/html.png',
    './Photos/java-programming-language.png',
    './Photos/css.png',
    './Photos/c.png',
    './Photos/javascript.png',
    './Photos/python-programming-language.png',
    './Photos/react-js.png',
    './Photos/go-programming-language.png',
    './Photos/php_PNG23.png',
    './Photos/mysql_PNG23.png',
  ];

  return <LandingPage imageUrls={imageUrls} />;
};


ReactDOM.render(<App1 />, document.getElementById('root'));
