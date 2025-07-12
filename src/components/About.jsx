import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, skills = [], link }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center mb-2'>{title}</h3>
          <ul className='text-center text-white text-[14px] space-y-1 mt-2'>
            {skills.map((skill, i) =>
              link && i === 0 ? (
                <li key={i}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    {skill}
                  </a>
                </li>
              ) : (
                <li key={i}>{skill}</li>
              )
            )}
          </ul>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

            <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate and results-driven MERN stack developer with a strong foundation in designing and building modern, scalable, and high-performance web applications. From intuitive front-end interfaces to robust back-end architectures, I bring ideas to life with clean, efficient code. With a deep interest in 3D web experiences and interactive UI, I love pushing the limits of what’s possible on the web. Always learning, always building — let's create something extraordinary.
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
