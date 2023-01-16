import React, { useEffect, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import PageNotFound from './components/ErrorPage';
import Certification from './pages/Certification';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { ContextProvider } from '../utils/Context';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // monitoring theme using effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'light') {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }, [theme]);

  // handle toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      if (prevTheme === 'light') {
        document.body.classList.remove('dark-mode');
      } else {
        document.body.classList.add('dark-mode');
      }

      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // save theme
  const toggleThemeContext = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <>
      <ContextProvider value={toggleThemeContext}>
        <Navigator />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/certification" element={<Certification />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>

        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
