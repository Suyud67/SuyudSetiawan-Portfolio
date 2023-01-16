import React from 'react';
import { FaLaptopCode, FaPenNib, FaTabletAlt } from 'react-icons/fa';

function CardServices() {
  return (
    <div className="cards-service">
      <div className="card">
        <div className="icon-card">
          <FaPenNib className="icon" />
        </div>
        <div className="desc-card">
          <h3>UI Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus cupiditate eius inventore. Incidunt, officiis autem sequi voluptas ipsa, expedita temporibus ipsum cupiditate minus magni quia fugiat nam eaque
            inventore.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon-card">
          <FaTabletAlt className="icon" />
        </div>
        <div className="desc-card">
          <h3>Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus cupiditate eius inventore. Incidunt, officiis autem sequi voluptas ipsa, expedita temporibus ipsum cupiditate minus magni quia fugiat nam eaque
            inventore.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon-card">
          <FaLaptopCode className="icon" />
        </div>
        <div className="desc-card">
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus cupiditate eius inventore. Incidunt, officiis autem sequi voluptas ipsa, expedita temporibus ipsum cupiditate minus magni quia fugiat nam eaque
            inventore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardServices;
