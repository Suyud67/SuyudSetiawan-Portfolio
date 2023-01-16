import React from 'react';
import SertificationCards from './CardsSertification';
import { ContextConsumer } from '../../utils/Context';

function ContainerSertif() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <div className={theme === 'light' ? 'container-sertif' : 'container-sertif dark-mode'}>
            <div className="header">
              <h2>Sertification</h2>
              <p>my sertification after learning online course and programming event</p>
            </div>
            <SertificationCards />
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default ContainerSertif;
