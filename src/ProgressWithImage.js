import React from 'react';

// ProgressWithImage component
const ProgressWithImage = ({ value, imageUrl }) => {
  return (
    <div className="progress-with-image">
      {/* Placeholder image */}
      <img className="image-placeholder" src={imageUrl} alt="Placeholder" />

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressWithImage;
