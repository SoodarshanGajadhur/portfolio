import React from "react";

import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologySections } from "../constants";


const TechnologyCard = ({index, name, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={name} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// First, group technologies by section
const technologiesBySection = {};
technologies.forEach((technology) => {
  if (!technologiesBySection[technology.section]) {
    technologiesBySection[technology.section] = [];
  }
  technologiesBySection[technology.section].push(technology);
});

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Tech I have used so far</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Explore the diverse technologies I've worked with in my journey so far. 
          From programming languages to frameworks, databases, and tools, this comprehensive 
          list reflects my versatile skill set. Dive into the technologies that fuel my projects 
          and contribute to a robust and dynamic development environment.
        </motion.p>
      </div>

      <div className='mt-10'>
          {technologySections.map((section) => (
            <div key={section}>
              <motion.p
                variants={fadeIn("", "", 0.1, 1)} 
                className="text-center text-[#8086cb] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"
              >
                {section}
              </motion.p>

              <div className='mt-5 flex flex-row flex-wrap justify-center gap-10 mb-20'>
                {technologiesBySection[section].map((technology, index) => (
                  <TechnologyCard key={technology.name} index={index} name={technology.name} icon={technology.icon} />
                ))}
              </div>
            </div>
          ))}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "tech");