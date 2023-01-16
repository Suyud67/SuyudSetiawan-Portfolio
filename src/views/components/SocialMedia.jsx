import React, { useRef, useLayoutEffect } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ContextConsumer } from '../../utils/Context';

function SocialMedia() {
  // get DOM Element
  const socialMediaIcons = useRef();
  let mediaSocialIcon1 = useRef();
  let mediaSocialIcon2 = useRef();
  let mediaSocialIcon3 = useRef();

  // make array for gsap animation
  let icons = [];

  useLayoutEffect(() => {
    const animationIcon = gsap.context(() => {
      icons.push(mediaSocialIcon1.current, mediaSocialIcon2.current, mediaSocialIcon3.current);

      // animation for social media icon
      gsap.from(icons, {
        duration: 2,
        y: 20,
        rotateY: 360,
        opacity: 0,
      });
    }, socialMediaIcons);

    return () => animationIcon.revert();
  });

  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <div className="icon-social-media" ref={socialMediaIcons}>
            <a href="https://www.instagram.com/setiawan_alarif/" ref={mediaSocialIcon1} className={theme === 'light' ? 'link-icon' : 'link-icon dark-mode'}>
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/suyud-setiawan-al-arif-67567821b/" ref={mediaSocialIcon2} className={theme === 'light' ? 'link-icon' : 'link-icon dark-mode'}>
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/Suyud67" ref={mediaSocialIcon3} className={theme === 'light' ? 'link-icon' : 'link-icon dark-mode'}>
              <FaGithub className="icon" />
            </a>
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default SocialMedia;
