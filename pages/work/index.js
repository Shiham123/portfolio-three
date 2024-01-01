import React from 'react';
import { motion } from 'framer-motion';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';
import { fadeIn } from '../../variant';
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}

          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8">
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[500px] mx-auto lg:mx-8">
              this services i provide my customer and client in this past several years. I am still growing to more learning and for better customer
              services
            </motion.p>
          </div>

          {/* slider */}
          <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
