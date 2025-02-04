import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { WiDaySunny } from 'react-icons/wi';

const Toggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with localStorage (to save the theme preference)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="swap swap-rotate">
      {/* Checkbox to control the theme */}
      <input
        type="checkbox"
        className="theme-controller hidden"
        checked={isDarkMode}
        onChange={toggleTheme}
      />

      {/* Sun icon for light mode */}
      <WiDaySunny className="swap-on h-5 w-5 fill-current" />

      {/* Moon icon for dark mode */}
      <FaMoon className="swap-off h-5 w-5 fill-current" />
    </label>
  );
};

export default Toggler;
