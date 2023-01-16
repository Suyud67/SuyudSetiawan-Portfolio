import React from 'react';
import Navbar from './Navbar';
import { ContextConsumer } from '../../utils/Context';

function Navigator() {
  return (
    <>
      {/* navbar */}
      <ContextConsumer>
        {(toggleThemeContext) => {
          const { theme } = toggleThemeContext;

          return (
            <div className={theme === 'light' ? 'navbar' : 'navbar dark-mode'}>
              <div className="logo">
                <h2>Suyud Setiawan</h2>
              </div>
              <Navbar />
            </div>
          );
        }}
      </ContextConsumer>
    </>
  );
}

export default Navigator;
