import Image from 'next/image';
import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            width={200} 
            height={200} 
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
