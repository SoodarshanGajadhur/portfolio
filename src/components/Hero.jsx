import React from 'react'
import { motion } from 'framer-motion'
import styled from "styled-components";

import { styles } from '../styles'
import { bitmoji } from '../assets'

const Img = styled.img`
  width: 1000px;
  height: 800px;
  object-fit: contain;
  margin: ;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 max-sm:flex-col`}>

        {/* <div className='w-1/2 flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div> */}

        
        <div className='flex-1 flex-col justify-center items-center mt-5'>
          <h1 className={`${styles.heroHeadText} text-white`}>Bonjour! I'm <span className='text-[#915eff]'>Soodarshan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Welcome to my portfolio website, where the magic of computer science unfolds through a collection of my innovative projects and a glimpse into my journey as a lifelong learner.  
          </p>
        </div>

        <div className='flex justify-center items-center max-sm:py-12'>
          <img
            src={bitmoji}
            alt='bitmoji'
            className='animate-wiggle objet-contain'
          />
        </div>

      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero;