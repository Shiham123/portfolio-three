import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import servicesData from './servicesData';
import { RxArrowTopRight } from 'react-icons/rx';

const ServiceSlider = () => {
  const paginationCondition = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${''}</span>`;
    },
  };

  return (
    <Swiper pagination={paginationCondition} modules={[Pagination]} slidesPerView={3}>
      {servicesData.map((item, index) => {
        const { title, description, icon } = item;
        return (
          <SwiperSlide key={index} className="mx-[10px]">
            <div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a926] transition-all duration-300">
              {/* icon */}
              <div className="text-accent mb-4">{icon}</div>

              {/* title & description */}
              <div>
                <div>{title}</div>
                <p>{description}</p>
              </div>

              <div>
                <RxArrowTopRight size={30} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
