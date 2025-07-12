import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
  <div className={`${styles.padding} max-w-7xl mx-auto`}>
    <p className={styles.sectionSubText}>Technologies I've Worked With</p>
    <h2 className={styles.sectionHeadText}>Skills</h2>
  </div>
</motion.div>


      <div className='mt-10 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div key={technology.name} className='flex flex-col items-center gap-2'>
            <div className='w-28 h-28'>
              <BallCanvas icon={technology.icon} />
            </div>
            <p className='text-white text-sm text-center'>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
