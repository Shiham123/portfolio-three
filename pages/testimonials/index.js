import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';
import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonial = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center ">
        {/* title */}
        <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 mb-8 xl:mb-20">
          What clients <span className="text-accent">Say.</span>
        </motion.h2>

        {/* Slider */}
        <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden">
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
