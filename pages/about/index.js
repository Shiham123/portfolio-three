import React, { useState } from 'react';

// counters
import CountUp from 'react-countup';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';
import aboutData from '../../components/aboutData';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avater img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[70px] -left-[130px]"
      >
        <Avatar />
      </motion.div>
      {/* body div */}
      <motion.div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text or left section */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Captivating <span className="text-accent">Stories</span>birth magnificent designs
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            10 years ago, i began freelancing as a developer, Since then, i&apos;ve done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use
          </p>
          {/* counters */}
          <div>
            <div>
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.5] max-w-[100px]">years of experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2ed section */}
        <div className="flex flex-col w-full xl:max-w-[55%] h-[480px]">
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              const { icons, title, stage } = item;
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl transition-all duration-300">
                          {icon}
                        </div>
                      );
                    })}
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
