import { useState, useEffect } from 'react';
import './scss/App.scss';
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollHintArrow from './components/ScrollHintArrow';

const transitionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Component1 = () => (
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
      Theme Switcher Example
    </h1>
    <ScrollHintArrow isInverted={false} />
  </motion.div>
);

const Component2 = () => (
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

function App() {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", themePreference);
  const [currentComponent, setCurrentComponent] = useState(1);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const now = Date.now();

      // Debounce to prevent fast repeated scroll events
      if (now - lastScrollTime < 1000) return;

      if (e.deltaY > 0 && currentComponent === 1) {
        setCurrentComponent(2);
        setLastScrollTime(now);
      } else if (e.deltaY < 0 && currentComponent === 2) {
        setCurrentComponent(1);
        setLastScrollTime(now);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentComponent, lastScrollTime]);
  
  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <header>
        <h1>DEMO APP</h1>
        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
      </header>
      
  
      <AnimatePresence mode="wait">
        {currentComponent === 1 ? (
          <Component1 />
        ) : (
          <Component2 />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
