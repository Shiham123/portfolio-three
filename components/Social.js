import React from 'react';
import Link from 'next/link';

import { RiGithubLine, RiGoogleLine, RiLinkedinLine } from 'react-icons/ri';
import { FaGoogleDrive, FaWhatsapp } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mt-6">
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
        href={'https://drive.google.com/file/d/1mIZLGn4L2oNt68JPh8NYbwEIXijSEqIT/view?usp=sharing'}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaGoogleDrive size={30} />
      </Link>
      <a href={'https://wa.me/+8801327239397'} target="_blank" className="hover:text-accent transition-all duration-300">
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default Social;
