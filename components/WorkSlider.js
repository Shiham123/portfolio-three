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
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {images.map((item, secondIndex) => {
                const { path } = item;
                return (
                  <div key={secondIndex} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={path} width={500} height={300} alt="images" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 text-[13px] tracking-[0.2rem]">
                        <div className="flex items-center gap-x-2 ">
                          {/* title part one */}
                          <div className="delay-100">Live Link</div>
                          {/* title part two */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Code Link</div>

                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
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
