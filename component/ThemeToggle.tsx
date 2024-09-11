'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // 初期設定でローカルストレージからテーマを読み込む
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // テーマをライトモードに変更
  const setLightMode = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  // テーマをダークモードに変更
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
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: theme === 'light' ? '#f1c40f' : '#34495e',
          borderRadius: '50px',
          padding: '5px',
          width: '100px',
          transition: 'background 0.3s ease',
        }}
      >
        {/* 太陽アイコンをクリックするとライトモードに変更 */}
        <FaSun
          onClick={setLightMode}
          style={{
            color: theme === 'light' ? '#f39c12' : '#bdc3c7',
            transition: 'color 0.3s ease',
            cursor: theme === 'light' ? 'not-allowed' : 'pointer', // 現在のテーマがライトの場合は無効に
          }}
        />
        {/* トグルの丸 */}
        <div
          style={{
            width: '31px',
            height: '31px',
            background: '#fff',
            borderRadius: '50%',
            transform: theme === 'light' ? 'translateX(0)' : 'translateX(34px)',
            transition: 'transform 0.3s ease',
          }}
        />
        {/* 月アイコンをクリックするとダークモードに変更 */}
        <FaMoon
          onClick={setDarkMode}
          style={{
            color: theme === 'dark' ? '#ecf0f1' : '#7f8c8d',
            transition: 'color 0.3s ease',
            cursor: theme === 'dark' ? 'not-allowed' : 'pointer', // 現在のテーマがダークの場合は無効に
          }}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
