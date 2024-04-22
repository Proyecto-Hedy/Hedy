import React from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            layout="responsive"
            width={300}
            height={400}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
