import React from 'react';
import ContentAbout from '../components/ContentAbout';
import { ContextConsumer } from '../../utils/Context';

function About() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;

        return (
          <div className={theme === 'light' ? 'container-about' : 'dark-mode container-about'}>
            <div className="header">
              <h2>About Me</h2>
            </div>
            <ContentAbout />
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default About;
