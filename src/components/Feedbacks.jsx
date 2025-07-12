import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">“</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {hasTestimonials ? (
          testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))
        ) : (
          <motion.div
            variants={fadeIn('', '', 0.3, 1)}
            className="text-center mt-12"
          >
            <p className="text-white text-[22px] sm:text-[26px] font-semibold max-w-2xl mx-auto leading-relaxed">
              <span className="blue-text-gradient">Looks like it's pretty cool</span> around here — no feedback yet!
            </p>
            <p className="mt-2 text-secondary text-[16px]">
              Be the first to drop a word 🚀
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedbacks');
