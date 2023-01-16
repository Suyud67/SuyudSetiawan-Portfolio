import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { ContextConsumer } from '../../utils/Context';

function Footer() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <footer className={theme === 'light' ? '' : 'dark-mode'}>
            <BiCopyright /> 2022 Created by <a href="https://github.com/Suyud67">Suyud Setiawan</a>
          </footer>
        );
      }}
    </ContextConsumer>
  );
}

export default Footer;
