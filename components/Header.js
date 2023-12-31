import React from 'react';
import Link from 'next/link';

// component
import Social from './Social';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            <h1 className="font-poppins italic text-2xl font-bold">
              Shiham <span className="text-accent">portfolio</span>
            </h1>
          </Link>
          {/* Socials */}
          <div>
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
