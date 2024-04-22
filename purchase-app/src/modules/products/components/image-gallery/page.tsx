import Image from 'next/image';
import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '40px', marginBottom: '40px', height: '250px', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <div key={index}>
          <Image style={{ border: '1px solid #ddd', borderRadius: '15px' }} src={image} alt={`Gallery image ${index}`} width={250} height={250} objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;