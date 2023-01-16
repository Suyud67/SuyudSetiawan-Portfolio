import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';
import { ContextConsumer } from '../../utils/Context';

function SectionContact() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <div className={theme === 'light' ? 'contact-me' : 'contact-me dark-mode'} data-aos="fade-in">
            <h2>Lets Work Together</h2>
            <Link to="/contact" className="link-contact">
              Contact Me! <FaTelegramPlane className="tele-icon" />
            </Link>
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default SectionContact;
