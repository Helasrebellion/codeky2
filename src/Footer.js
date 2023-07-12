import React from 'react';

// Footer component
const Footer = () => {
  // Handle the redirection to external URLs
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  // Render the footer content
  return (
    <div id="footer">
      <p className="leftfooter">
        Sylvia Mullins Development © 2023 All rights reserved
      </p>
      <p className="rightfooter">
        Follow me
        <br />

        {/* Github social button */}
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

        {/* LinkedIn social button */}
        <button
          onClick={() => handleRedirect('https://www.linkedin.com/in/sylviahela/')}
          className="socialButton"
        >
          <img
            src={require('./Photos/linkedin.svg').default}
            alt="linkedinlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>

        {/* Instagram social button */}
        <button
          onClick={() => handleRedirect('https://www.instagram.com/sylviamullinsdev/')}
          className="socialButton"
        >
          <img
            src={require('./Photos/instagram.svg').default}
            alt="instagramlogo"
            style={{ width: '30px', height: '50px' }}
          />
        </button>

        {/* Twitter social button */}
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
          src={require('./Photos/smlogo.png')}
          alt="freelancelogo"
        />
      </p>
    </div>
  );
};

export default Footer;
