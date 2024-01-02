import React from 'react';
import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonial = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center ">
        {/* title */}
        <h2 className="h2 mb-8 xl:mb-0">
          What clients <span className="text-accent">Say.</span>
        </h2>

        {/* Slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
