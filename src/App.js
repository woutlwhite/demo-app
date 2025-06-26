import { useState, useEffect } from 'react';
import './scss/App.scss';
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollHintArrow from './components/ScrollHintArrow';
import { StartScreen } from './components/StartScreen';
import { ProfileScreen } from './components/ProfileScreen';

const transitionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

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
          <StartScreen transitionVariants={transitionVariants} />
        ) : (
          <ProfileScreen transitionVariants={transitionVariants} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
