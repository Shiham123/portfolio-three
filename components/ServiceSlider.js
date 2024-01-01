import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import servicesData from './servicesData';
import { RxArrowTopRight } from 'react-icons/rx';

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const paginationCondition = { clickable: true };

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth >= 1200 ? setSlidesPerView(3) : window.innerWidth >= 768 ? setSlidesPerView(2) : setSlidesPerView(1);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper pagination={paginationCondition} modules={[Pagination]} slidesPerView={slidesPerView} className="h-[240px] sm:h-[340px]">
      {servicesData.map((item, index) => {
        const { title, description, icon } = item;
        return (
          <SwiperSlide key={index} className="mx-[10px]">
            <div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a926] transition-all duration-300">
              {/* icon */}
              <div className="text-accent mb-4 text-3xl group-hover:translate-x-4 group-hover:text-accent transition-all duration-300">{icon}</div>

              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{title}</div>
                <p className="max-w-[350px] leading-normal">{description}</p>
              </div>

              <div>
                <RxArrowTopRight size={30} className="group-hover:rotate-45  group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
