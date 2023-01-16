import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { ContextConsumer } from '../../utils/Context';

function BtnTheme() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme, toggleTheme } = toggleThemeContext;
        return (
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === 'light' ? <BiSun /> : <BiMoon />}
          </button>
        );
      }}
    </ContextConsumer>
  );
}

export default BtnTheme;
