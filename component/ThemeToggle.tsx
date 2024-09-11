'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const setLightMode = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const setDarkMode = () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: theme === 'light' ? '#000' : '#fff',
        gap: '10px',
      }}
    >
      <FaSun
        onClick={setLightMode}
        style={{ opacity: theme === 'light' ? 1 : 0.5 }}
      />
      <FaMoon
        onClick={setDarkMode}
        style={{ opacity: theme === 'dark' ? 1 : 0.5 }}
      />
    </div>
  );
};

export default ThemeToggle;
