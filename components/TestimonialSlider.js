import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { testimonialData } from './TestimonialData';

const TestimonialSlider = () => {
  const paginationCondition = { clickable: true };

  return (
    <Swiper className="my-10" navigation={true} modules={[Pagination, Navigation]} pagination={paginationCondition}>
      {testimonialData.map((item, index) => {
        const { image, name, position, message } = item;
        return (
          <SwiperSlide className="pb-10" key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 f-full px-16">
              {/* avater , name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avater */}
                  <div className="mb-2 mx-auto">
                    <Image src={image} width={100} height={100} alt="avater-img" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/60 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">{message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
