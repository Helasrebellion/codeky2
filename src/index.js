import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

      {/* Requirement 1 (first set): 

      Visualize data in a user friendly way. (e.g. graph, chart, etc)

      && 

   Requirement 2 (third set):

      Develop your project using a common JavaScript framework
      such as React, Angular, or Vue  */}


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

{/* Requirement 2 (first set): 

             Use arrays, objects, sets or maps to store and retrieve information 
              that is displayed in your app

      && 

   Requirement 2 (third set):

      Develop your project using a common JavaScript framework
      such as React, Angular, or Vue  */}

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      url: 'http://127.0.0.1:5500/Images/Portfolio/redball.png',
      caption: 'Red Ball',
    },
    {
      id: 2,
      url: 'http://127.0.0.1:5500/Images/Portfolio/lyman%20hall%20theater.png',
      caption: 'Lyman Hall Theater',
    },
    {
      id: 3,
      url: 'http://127.0.0.1:5500/Images/Portfolio/New%20Year%20Bash.png',
      caption: 'New Year Bash',
    },
    {
      id: 4,
      url: 'https://github.com/Helasrebellion/helasrebellion.github.io/blob/main/Images/Portfolio/pandaisia%20chocolates%20home.png?raw=true',
      caption: 'Pandaisia Chocolates',
    },
    {
      id: 5,
      url: 'https://github.com/Helasrebellion/helasrebellion.github.io/blob/main/Images/Portfolio/sylviasbasiccalc.png?raw=true',
      caption: 'Java Calculator',
    },
  ];

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div className="image-item" key={image.id}>
          <img className="zoom-image" src={image.url} alt={image.caption} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

{/* Requirement 3 (second set): 

      Retrieve data from a third-party API
       and use it to display something within your app.  */}


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
            src="https://cdn-icons-png.flaticon.com/128/25/25231.png"
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
            src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png"
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
            src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
            alt="instagramlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>
        <button
          onClick={() => handleRedirect('https://twitter.com/SylviaMDev')}
          className="socialButton"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/739/739257.png"
            alt="twitterlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>
      </p>
      <p className="centeredfooter">
        <img
          id="logofooter"
          src="https://helasrebellion.github.io/Images/Logo/smlogo.png"
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
    'http://127.0.0.1:5500/Images/Logo/html.png',
    'http://127.0.0.1:5500/Images/Logo/java-programming-language.png',
    'http://127.0.0.1:5500/Images/Logo/css.png',
    'http://127.0.0.1:5500/Images/Logo/c.png',
    'http://127.0.0.1:5500/Images/Logo/javascript.png',
    'http://127.0.0.1:5500/Images/Logo/python-programming-language.png',
    'http://127.0.0.1:5500/Images/Logo/react-js.png',
    'http://127.0.0.1:5500/Images/Logo/go-programming-language.png',
    'http://127.0.0.1:5500/Images/Logo/php_PNG23.png',
    'http://127.0.0.1:5500/Images/Logo/mysql_PNG23.png',
  ];

  return <LandingPage imageUrls={imageUrls} />;
};

ReactDOM.render(<App1 />, document.getElementById('root'));
