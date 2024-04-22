import Image from 'next/image';
import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '15px' }}>
      {images.map((image, index) => (
        <div key={index} style={{ margin: '5px' }}>
          <Image src={image} alt={`Gallery image ${index}`} width={300} height={300} objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;