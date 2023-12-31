import React from 'react';
import Link from 'next/link';

import { RiFacebookLine, RiGithubLine, RiGoogleLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine size={30} />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine size={30} />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine size={30} />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine size={30} />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiGoogleLine size={30} />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine size={30} />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={30} />
      </Link>
    </div>
  );
};

export default Social;
