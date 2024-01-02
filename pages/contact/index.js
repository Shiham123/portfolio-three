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
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-12">
            Let&apos;s <span className="text-accent">Connect. </span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" {...register('name', { required: true })} />
              <input type="email" placeholder="email" className="input" {...register('email', { required: true })} />
            </div>
            <div className="flex justify-around">
              {errors.name && <span className="text-red-500">Name is required</span>}
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            {/* text area */}
            <input type="text" placeholder="subject" className="input" {...register('subject', { required: true })} />
            <textarea placeholder="message" className="textarea" {...register('message')} />

            {/* submit button */}
            <button
              type="submit"
              className="btn rounded-full border-[2px] border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let&apos; talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22pxs]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
