import React from 'react';
import Link from 'next/link';

import { RiGithubLine, RiGoogleLine, RiLinkedinLine } from 'react-icons/ri';
import { FaGoogleDrive } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://github.com/Shiham123'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine size={30} />
      </Link>
      <Link href={'mailto:shiham36651786@gmail.com'} className="hover:text-accent transition-all duration-300">
        <RiGoogleLine size={30} />
      </Link>
      <Link href={'https://www.linkedin.com/in/shiham36651786'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={30} />
      </Link>
      <Link
        href={'https://drive.google.com/file/d/1vvVNPURGEdoin_8O-t57-EkAAlW0d5yI/view?usp=sharing'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaGoogleDrive size={30} />
      </Link>
    </div>
  );
};

export default Social;
