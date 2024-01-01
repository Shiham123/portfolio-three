import React from 'react';
import Image from 'next/image';

import bulbImg from '../public/bulb.png';

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-plus duration-75 w-[200px] xl:w-[260px]">
      <Image src={bulbImg} width={260} height={200} className="w-full h-full" alt="services-img" />
    </div>
  );
};

export default Bulb;
