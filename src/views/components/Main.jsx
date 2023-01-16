import React from 'react';
import ImgMe from './ImgMe';
import { ContextConsumer } from '../../utils/Context';

function Main() {
  return (
    <>
      {/* main */}

      <ContextConsumer>
        {(toggleThemeContext) => {
          const { theme } = toggleThemeContext;
          return (
            <main className={theme === 'light' ? 'main' : 'main dark-mode'}>
              <div className="desc-me">
                <h2>Hello World,</h2>
                <h1>I'm Suyud Setiawan</h1>
                <p>Front-End Web Developer</p>
              </div>
              <ImgMe />
            </main>
          );
        }}
      </ContextConsumer>
    </>
  );
}

export default Main;
