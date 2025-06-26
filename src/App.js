import { useState } from 'react';
import './scss/App.scss';
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';

function App() {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", themePreference);
  
  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <div className='content'>
        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <h1 className='title'>
          Theme Switcher Example
        </h1>
      </div>
    </div>
  );
}

export default App;
