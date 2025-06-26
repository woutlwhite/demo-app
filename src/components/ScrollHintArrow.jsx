import React from 'react';
import { motion } from 'framer-motion';

const ScrollHintArrow = ({ isInverted }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      style={{
        position: 'absolute',
        bottom: isInverted ? 'initial' : '30px',
        top: isInverted ? '130px' : 'initial',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '2rem',
        color: 'var(--text-color)',
        cursor: 'pointer',
        rotate: isInverted ? '180deg' : '0deg',
      }}
    >
      ↓
    </motion.div>
  );
};

export default ScrollHintArrow;
