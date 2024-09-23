import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={index} src={image} alt="related to meaning" className="gallery-image" />
        ))
      ) : (
        <p>No images found..</p>
      )}
    </div>
  );
};

export default ImageGallery;
