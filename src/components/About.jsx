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
          My name is Soodarshan, and I am a fourth-year Bsc Honors Computer Science student at the University of Alberta. I have gained valuable experience 
          in web development through various projects. In addition to web development, I also have a background in Android development. I am well-versed in 
          several programming languages, including Python, C, C++, Kotlin, and Java. These languages have allowed me to tackle a wide range of projects and 
          explore different aspects of software development.
        </p>

        <p>
          Additionally, I have spent approximately two years working as an intern in the industry in an Agile team, further enhancing my skills and knowledge.
          Throughout my journey, I have had the opportunity to work with various AWS services and utilize Terraform for infrastructure as code. This experience 
          has given me a solid foundation in cloud computing and a deep understanding of how to efficiently manage and deploy applications on a scalable platform.
        </p>

        <p>
          Furthermore, working in a team environment during my internship allowed me to hone my communication and collaboration skills. I learned to effectively 
          work with colleagues, contribute to group discussions, and leverage the strengths of each team member to achieve project goals. My internship experience 
          also helped me develop strong problem-solving and critical thinking abilities. I encountered various challenges during projects, and through careful 
          analysis and innovative thinking, I was able to identify and implement effective solutions. This experience taught me the importance of being adaptable, 
          resourceful, and persistent when facing complex problems.
        </p>

        <p>
          Apart from my industry experience, I have a keen interest in low-level programming. During my academic pursuits, I have taken courses in diverse areas, 
          including algorithms, computer architecture, product management, and software quality. These courses have provided me with a well-rounded understanding 
          of the software development lifecycle and equipped me with essential skills to deliver high-quality products.
        </p>
        
        <p>
          As a driven and dedicated individual, I am constantly seeking new challenges and opportunities to expand my knowledge and skillset. I am excited to 
          leverage my experiences and contribute to innovative projects that push the boundaries of technology.
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