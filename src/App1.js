import React from 'react';
import LandingPage from './LandingPage';

// App1 component
const App1 = () => {
  // Array of image URLs
  const imageUrls = [
    '/Photos/html.png',
    '/Photos/java-programming-language.png',
    '/Photos/css.png',
    '/Photos/c.png',
    '/Photos/javascript.png',
    '/Photos/python-programming-language.png',
    '/Photos/react-js.png',
    '/Photos/go-programming-language.png',
    '/Photos/php_PNG23.png',
    '/Photos/mysql_PNG23.png',
  ];

  // Render the LandingPage component with the imageUrls passed as props
  return <LandingPage imageUrls={imageUrls} />;
};

export default App1;
