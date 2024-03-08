import React from 'react';
import Link from 'next/link';

import { RiFacebookLine, RiGithubLine, RiGoogleLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'/'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine size={30} />
      </Link>
      <Link href={'https://www.instagram.com/shihamusuf'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine size={30} />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=61556676855837'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine size={30} />
      </Link>
      <Link href={'https://github.com/Shiham123'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine size={30} />
      </Link>
      <Link href={'mailto:shiham36651786@gmail.com'} className="hover:text-accent transition-all duration-300">
        <RiGoogleLine size={30} />
      </Link>
      <Link href={'https://twitter.com/ShihamUsuf'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiTwitterLine size={30} />
      </Link>
      <Link href={'https://www.linkedin.com/in/shiham36651786'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={30} />
      </Link>
    </div>
  );
};

export default Social;
