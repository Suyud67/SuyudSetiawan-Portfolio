import React, { useLayoutEffect, useRef } from 'react';
import SocialMedia from './SocialMedia';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

function SocialMediaSection() {
  const containerHeader = useRef();
  const headerSocialMedia = useRef();

  gsap.registerPlugin(TextPlugin);

  useLayoutEffect(() => {
    const animationText = gsap.context(() => {
      gsap.to(headerSocialMedia.current, {
        duration: 2,
        text: 'Or you can contact me on my social media',
      });
    }, headerSocialMedia);

    return () => animationText.revert();
  });

  return (
    <div className="social-media">
      <div className="header" ref={containerHeader}>
        <h2>My Social Media</h2>
        <p ref={headerSocialMedia}></p>
      </div>

      <SocialMedia />
    </div>
  );
}

export default SocialMediaSection;
