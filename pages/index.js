import React from 'react';

// framer motion
import { easeInOut, motion } from 'framer-motion';

// Components
import LatestParticles from '../components/LatestParticles';
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
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
            Shiham Bin Yousuf
            <br />{' '}
            <span className="text-accent">
              MERN Stack <br /> <span className="text-white">Developer</span>
            </span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 lowercase"
          >
            While I am a MERN stack developer, I don&apos;t limit myself to just that. There are countless languages and full stacks out there, and I
            am constantly exploring and learning new ones every day.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          {/* big screen button */}
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      {/* img */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* explosion img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* Particles */}
        <div>
          {/* <ParticlesContainer /> */}
          <LatestParticles />
        </div>

        {/* Avater img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: easeInOut }}
          className="w-full h-full max-w-[737px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
