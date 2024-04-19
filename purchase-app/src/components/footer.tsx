import React from 'react';
import Container from '@/components/container';

const Footer = () => {
  return (
    <footer className="footer bg-neutral-50 border-t border-neutral-200 py-4">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-4">
          <p className='text-sm lg:text-base'>Copyright © <a className='footer-href' href="https://github.com/NicolasNievas" target="_blank" rel="noopener noreferrer">Nicolas Nievas</a> 2024</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
