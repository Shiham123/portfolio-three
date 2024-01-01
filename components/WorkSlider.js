import React from 'react';
import workSlides from './WorkData';

const WorkSlider = () => {
  const { slides } = workSlides;
  return (
    <div>
      {slides.map((item, index) => {
        console.log(item);
      })}
    </div>
  );
};

export default WorkSlider;
