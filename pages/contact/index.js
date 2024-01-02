import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import Circles from '../../components/Circles';
import { fadeIn } from '../../variant';

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Let&apos;s <span className="text-accent">Connect. </span>
          </h2>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" {...register('name', { required: true })} />
              <input type="email" placeholder="email" className="input" {...register('email', { required: true })} />
            </div>
            <div className="flex justify-around">
              {errors.name && <span className="text-red-500">Name is required</span>}
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
