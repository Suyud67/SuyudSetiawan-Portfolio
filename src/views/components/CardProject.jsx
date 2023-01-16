import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import noteApp from '../../public/image/noteApp.webp';
import restaurantsApp from '../../public/image/restaurantsApp.webp';
import weatherApp from '../../public/image/weatherApp.webp';
import { ContextConsumer } from '../../utils/Context';

function CardsProject() {
  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <div className="cards-project">
            <div className={theme === 'light' ? 'card' : 'card dark-mode'}>
              <div className="desc-card">
                <div className="technology">
                  <p className="icons react">React</p>
                  <p className="icons css">CSS 3</p>
                  <p className="icons api">API</p>
                  <p className="icons react">React Routes</p>
                  <p className="icons react">React Icons</p>
                </div>
                <h3>Note App</h3>
                <p>This App will help you to write every single moment, and everywhere.</p>
                <a href="https://suyud67-note-app-2.netlify.app/" className="btn-project">
                  check project
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="img-card">
                <img src={noteApp} alt="" className="img" loading="lazy" />
              </div>
            </div>
            <div className={theme === 'light' ? 'card' : 'card dark-mode'}>
              <div className="desc-card">
                <div className="technology">
                  <p className="icons html">HTML</p>
                  <p className="icons css">CSS 3</p>
                  <p className="icons js">Javascript</p>
                  <p className="icons localhost">indexDB</p>
                  <p className="icons api">API</p>
                  <p className="icons webpack">Webpack</p>
                  <p className="icons webpack">PWA</p>
                </div>
                <h3>Let's Eat</h3>
                <p>Find favorite restaurants around you 🍜</p>
                <a href="https://suyud67-lets-restaurant.netlify.app/" className="btn-project">
                  check project
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="img-card">
                <img src={restaurantsApp} alt="" className="img" loading="lazy" />
              </div>
            </div>
            <div className={theme === 'light' ? 'card' : 'card dark-mode'}>
              <div className="desc-card">
                <div className="technology">
                  <p className="icons html">HTML</p>
                  <p className="icons css">CSS 3</p>
                  <p className="icons js">Javascript</p>
                  <p className="icons api">API</p>
                </div>
                <h3>Weather App</h3>
                <p>Check the weather before travel around the world 🛫</p>
                <a href="https://suyud67-weather-app.netlify.app/" className="btn-project">
                  check project
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="img-card">
                <img src={weatherApp} alt="" className="img" loading="lazy" />
              </div>
            </div>
          </div>
        );
      }}
    </ContextConsumer>
  );
}

export default CardsProject;
