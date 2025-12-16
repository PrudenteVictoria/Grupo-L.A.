import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './nav';
import Footer from './footer';

function Layout({ children }) {
  // SEO NATIVO con useEffect
  useEffect(() => {
    document.title = "Tienda de Libros | Juegos Históricos, Clásicos y Modernos";
   
    // Función que actualiza meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag(
      'description',
      'Descubrí nuestra tienda de libros online. Novelas, clásicos, libros modernos, educativos y best sellers. Comprá libros al mejor precio.'
    );
  
    updateMetaTag(
      'keywords',
      'libros, tienda de libros, novelas, clásicos, libros modernos, libros educativos, literatura, comprar libros online'
    );
  
    updateMetaTag('author', 'Tienda de Libros');
    updateMetaTag('robots', 'index, follow');
  
    // Open Graph (Facebook, WhatsApp, LinkedIn)
    updateMetaTag(
      'og:title',
      'Tienda de Libros | Literatura Clásica y Moderna',
      'property'
    );
  
    updateMetaTag(
      'og:description',
      'Explorá un amplio catálogo de libros: novelas, clásicos, literatura moderna y educativa. Comprá online de forma fácil y segura.',
      'property'
    );
  
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag(
      'og:image',
      window.location.origin + '/libros-og.jpg',
      'property'
    );
    updateMetaTag('og:url', window.location.origin, 'property');
    updateMetaTag('og:site_name', 'Tienda de Libros', 'property');
  
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Tienda de Libros');
    updateMetaTag(
      'twitter:description',
      'Comprá novelas, clásicos y libros modernos en nuestra tienda online'
    );
    updateMetaTag(
      'twitter:image',
      window.location.origin + '/libros-og.jpg'
    );

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin;

  }, []);

  return (
    <LayoutContainer>
      <Header role="banner">
        <Navbar />
      </Header>
      
      <Main role="main">
        {children}
      </Main>
      
      <FooterWrapper role="contentinfo">
        <Footer />
      </FooterWrapper>
    </LayoutContainer>
  );
}

export default Layout;

// Styled Components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  margin-top: auto;
`;