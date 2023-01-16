import React from 'react';
import ContainerContact from '../components/ContainerContact';
import { ContextConsumer } from '../../utils/Context';

function Contact() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <div className={theme === 'light' ? 'container-contact' : 'container-contact dark-mode'}>
            <ContainerContact />
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default Contact;
