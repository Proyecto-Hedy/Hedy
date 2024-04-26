import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '10px 0' }}>
      <div className="container mx-auto px-5 h-[200px]">
        <div className="flex items-center h-full flex-col lg:flex-row items-center justify-center lg:pl-4">
          <p className='text-sm lg:text-base'>
            <Link
              className='font-extralight hover:text-blue'
              href="https://github.com/Proyecto-Hedy/ProjectHedy" 
              target='_blank'
            >Project Hedy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
