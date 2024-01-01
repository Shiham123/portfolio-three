import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

import 'swiper/css/pagination';
import 'swiper/css';

import workSlides from './WorkData';

// ! component
const WorkSlider = () => {
  const { slides } = workSlides;

  // pagination condition
  const paginationCondition = { clickable: true };

  return (
    <Swiper spaceBetween={10} pagination={paginationCondition} modules={[Pagination]} className="h-[280px] sm:h-[480px]">
      {slides.map((item, index) => {
        const { images } = item;
        return (
          <SwiperSlide key={index}>
            <div>
              {images.map((item, secondIndex) => {
                const { title, path } = item;
                return (
                  <div key={secondIndex}>
                    <div>{title}</div>
                    <div>
                      <Image src={path} width={500} height={300} alt="images" />
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
