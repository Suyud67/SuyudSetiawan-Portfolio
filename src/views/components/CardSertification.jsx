import React from 'react';
import img1 from '../../public/image/sertif1.webp';
import img2 from '../../public/image/sertif2.webp';
import img3 from '../../public/image/sertif3.webp';

function CardSertification() {
  return (
    <>
      <div className="sertificaion">
        <div className="img-sertif">
          <img src={img2} alt="sertification" loading="lazy" className="img" />
          <div className="sertif-desc">
            <h4>Belajar Fundamental Front-End Web Developer</h4>
            <p>1 September 2022</p>
          </div>
        </div>
      </div>
      <div className="sertificaion">
        <div className="img-sertif">
          <img src={img3} alt="sertification" loading="lazy" className="img" />
          <div className="sertif-desc">
            <h4>Belajar Fundamental Aplikasi Web dengan React</h4>
            <p>19 Oktober 2022</p>
          </div>
        </div>
      </div>
      <div className="sertificaion">
        <div className="img-sertif">
          <img src={img1} alt="sertification" loading="lazy" className="img" />
          <div className="sertif-desc">
            <h4>Menjadi Front-End Web Expert</h4>
            <p>23 November 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSertification;
