import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Pagination } from 'swiper/core';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { RxArrowTopRight } from 'react-icons/rx';

import servicesData from './servicesData';

SwiperCore.use([FreeMode, Pagination]);

const ServiceSlider = () => {
  const swiperPoints = { 320: { slidesPerView: 1, spaceBetween: 15 }, 640: { slidesPerView: 1, spaceBetween: 15 } };

  return (
    <Swiper
      breakpoints={swiperPoints}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {servicesData.map((item, index) => {
        const { icon, title, description } = item;
        return (
          <SwiperSlide key={index}>
            <div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
              {/* icon */}
              <div>{icon}</div>
              {/* title and description */}
              <div>
                <div>{title}</div>
                <p>{description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
