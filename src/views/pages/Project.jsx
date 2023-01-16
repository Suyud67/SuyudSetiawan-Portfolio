import React from 'react';
import CardsProject from '../components/CardProject';
import { ContextConsumer } from '../../utils/Context';

function Project() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <div className={theme === 'light' ? 'container-project' : 'container-project dark-mode'}>
            <div className="header">
              <h2>My Project</h2>
            </div>
            <CardsProject />
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default Project;
