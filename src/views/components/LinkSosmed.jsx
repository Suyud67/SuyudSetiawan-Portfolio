import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function LinkSosmed() {
  return (
    <div className="social">
      <a href="/" className="link-media">
        <FaInstagram />
      </a>
      <a href="/" className="link-media">
        <FaGithub />
      </a>
      <a href="/" className="link-media">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default LinkSosmed;
