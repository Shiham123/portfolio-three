import React from 'react';
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';

// Components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectBtn';
import Avatar from '../components/Avatar';

// variants
import { fadeIn } from '../variant';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">
            Transform ideas <br /> Info{' '}
            <span className="text-accent">digital reality</span>
          </h1>
          {/* Subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 lowercase">
            THis is next js portfolio. i make this for my technical skill growth
            purpose. i want to know react js for this purpose i am coming to
            make this project from youtube.
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          {/* big screen button */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      {/* img */}
      <div>img</div>
    </div>
  );
};

export default Home;
