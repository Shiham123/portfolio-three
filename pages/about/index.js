import React, { useState } from 'react';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';
import aboutData from '../../components/aboutData';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-accent xl:text-left">
      <Circles />
      {/* Avater img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      {/* body div */}
      <motion.div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">text</div>

        {/* 2ed section */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          {/* about data title */}
          <div className="flex gap-x-8 xl:gap-x-12 text-white mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              const { title } = item;
              return (
                <div
                  className={`${
                    index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  {title}
                </div>
              );
            })}
          </div>
          {/* about data details */}
          <div className="text-white py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              const { icons, title } = item;
              return (
                <div key={itemIndex}>
                  {/* title */}
                  <div className="text-lg relative after:w-8 after:h-[2px] pb-2 after:bg-white after:absolute after:bottom-0 after:left-0">
                    {title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
