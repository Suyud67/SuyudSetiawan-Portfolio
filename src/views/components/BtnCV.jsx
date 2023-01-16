import React from 'react';
import myCV from '../../public/cv/CV-SuyudSetiawan.pdf';

function BtnCv() {
  return (
    <a href={myCV} className="btn-cv" download>
      Download CV
    </a>
  );
}

export default BtnCv;
