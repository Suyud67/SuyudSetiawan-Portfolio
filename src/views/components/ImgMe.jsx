import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import imageMe from '../../public/image/suyudsetiawan.webp';

function ImgMe() {
  const imgContainer = useRef();
  const imgMe = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(imgMe.current, {
        duration: 2,
        x: 700,
        rotate: 360,
        ease: 'bounce.out',
      });
    }, imgContainer);

    return () => ctx.revert();
  });

  return (
    <div className="image-main" ref={imgContainer}>
      <img src={imageMe} alt="Suyud Setiawan" className="img" ref={imgMe} />
    </div>
  );
}

export default ImgMe;
