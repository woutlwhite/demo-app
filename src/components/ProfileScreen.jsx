import { motion } from 'framer-motion';
import ScrollHintArrow from './ScrollHintArrow';

export const ProfileScreen = ({transitionVariants}) => (
  <motion.div 
    className='content'
    key="comp2"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={transitionVariants}
    transition={{ duration: 0.6 }}
  >
    <ScrollHintArrow isInverted={true} />
    <h1 className='title'>Component 2</h1>
    <p>This is the second component shown after scrolling.</p>
  </motion.div>
);