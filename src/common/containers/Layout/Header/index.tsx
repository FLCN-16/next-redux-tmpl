import React from 'react';

// Components
import Link from '../../../components/Link';

const Header: React.FC = () => {
  return (
    <header id='header' className='block w-full py-4 border-b'>
      <div className='container mx-auto'>
        <div className='inline-flex items-center'>
          <Link href='#'>Brand</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
