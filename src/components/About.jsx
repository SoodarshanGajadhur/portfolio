import React from 'react'
// import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
// import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

// const ServiceCard = ({index, title, icon}) => {
//   return (
//     <Tilt className='xs:w-[250px] w-full'>
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
//           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify space-y-3'
      >
        <p>
          Hey there! I’m Soodarshan — a curious and creative Software Developer who loves building cool stuff with code and AI. I graduated in June 2024 with a degree
          in Computer Science from the University of Alberta, and since then, I’ve been working as a Software Developer, diving deeper into cloud technologies, automation,
          and DevOps.
        </p>

        <p>
          I’m also an AWS Certified Solutions Architect – Associate, and I enjoy working with tools like Docker, Kubernetes, and Terraform to bring infrastructure to life.
          Lately, I’ve been experimenting with new AI tools and platforms to push the boundaries of what I can build from smarter apps to more seamless developer workflows.
        </p>

        <p>
          When I’m not coding or exploring new tech, you’ll probably find me watching or playing soccer (⚽ is life), catching a match with friends, or working on a side project
          that solves a problem I care about.
        </p>

        <p>
          I’m always open to exciting collaborations, new opportunities, or just chatting about tech, soccer, or both. Let’s connect!
        </p>
      </motion.p>
{/* 
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")