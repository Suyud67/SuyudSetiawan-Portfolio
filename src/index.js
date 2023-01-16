import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { BrowserRouter } from 'react-router-dom';

// import aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// import style css
import './styles/css/main.css';

AOS.init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
