import React from 'react';
import Image from 'next/image';
import topLeftImg from '../public/top-left-img.png';

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:[400px]">
      <Image src={topLeftImg} width={400} height={400} alt="top-left-img" />
    </div>
  );
};

export default TopLeftImg;
