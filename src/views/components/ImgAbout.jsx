import React from 'react';
import img from '../../public/image/AboutMe.webp';

function ImgAbout() {
  return (
    <div className="img-about">
      <img src={img} alt="about me" className="img" />
    </div>
  );
}

export default ImgAbout;
