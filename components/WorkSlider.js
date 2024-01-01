import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css/pagination';
import 'swiper/css';

import workSlides from './WorkData';

const WorkSlider = () => {
  const [slidePerScreen, setSlidePerScreen] = useState(3);
  const { slides } = workSlides;

  // here are handle slides per screen resize
  useEffect(() => {
    const resizeSlides = () =>
      window.innerWidth >= 1200 ? setSlidePerScreen(3) : window.innerWidth >= 768 ? setSlidePerScreen(2) : setSlidePerScreen(1);
    resizeSlides();
    return () => window.removeEventListener('resize', resizeSlides);
  }, []);

  // pagination condition
  const paginationCondition = { clickable: true };

  return (
    <Swiper pagination={paginationCondition} modules={[Pagination]} slidesPerView={slidePerScreen} className="h-[240px] sm:h-[340px]">
      {slides.map((item, index) => {
        const { images } = item;
        return <SwiperSlide key={index}>Slide</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default WorkSlider;
