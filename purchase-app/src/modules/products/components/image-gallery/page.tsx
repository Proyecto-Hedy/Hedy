import Image from 'next/image';
import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
            >
              <Image
                src={image}
                className="absolute inset-0 rounded-rounded"
                alt={`Product image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
