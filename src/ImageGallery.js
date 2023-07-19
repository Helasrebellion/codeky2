import React from 'react';

// ImageGallery component
const ImageGallery = () => {
  // Array of images with captions
  const images = [
    // The order of the images should match the desired layout
    {
      id: 1,
      src: "/Photos/redball.png",
      caption: 'Red Ball',
    },
    {
      id: 2,
      src: "/Photos/lyman hall theater.png",
      caption: 'Lyman Hall Theater',
    },
    {
      id: 3,
      src: "/Photos/New Year Bash.png",
      caption: 'New Year Bash',
    },
    {
      id: 4,
      src: "/Photos/pandaisia chocolates home.png",
      caption: 'Pandaisia Chocolates',
    },
    {
      id: 5,
      src: "/Photos/pandaisia chocolates about company.png",
      caption: 'Pandaisia Chocolates',
    },

    {
      id: 6,
      src: '/Photos/sylviasbasiccalc.png',
      caption: 'Java Calculator',
    },
  ];

  // Render the image gallery
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div className="image-item" key={image.id}>
          {/* Image */}
          <img className="zoom-image" src={image.src} alt={image.caption} />

        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
