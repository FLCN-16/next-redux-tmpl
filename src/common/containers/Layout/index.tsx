import React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id='page' className='min-h-screen'>
      <Header />

      <main id='main'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
