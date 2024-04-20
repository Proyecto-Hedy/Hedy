import React from 'react';
import Container from '@/components/molecules/Container';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', backgroundColor: '#f9f9f9', borderTop: '1px solid #ddd', padding: '10px 0', textAlign: 'center' }}>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-4">
          <p className='text-sm lg:text-base'>Copyright © <a className='footer-href' href="https://github.com/NicolasNievas" target="_blank" rel="noopener noreferrer">Nicolas Nievas</a> 2024</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
