import { motion } from 'framer-motion';
import ScrollHintArrow from './ScrollHintArrow';

export const StartScreen = ({transitionVariants}) => (
  <motion.div 
    className='content'
    key="comp1"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={transitionVariants}
    transition={{ duration: 0.6 }}
  >
    <h1 className='title'>
      Start Screen
    </h1>
    <ScrollHintArrow isInverted={false} />
  </motion.div>
);