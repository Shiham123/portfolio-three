import React from 'react';
// next
import Image from 'next/image';

// img
import avaterImg from '../public/myAvater.png';
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={avaterImg} width={737} height={678} alt="avater" className="translate-z-0 w-full h-full" />
    </div>
  );
};

export default Avatar;
