import { useRef } from 'react';
import { FaHome, FaRegAddressBook, FaBriefcase, FaMedal } from 'react-icons/fa';

function ListItems() {
  const navHome = useRef(null);

  return (
    <ul className="list-items">
      <li className="item">
        <FaHome />
        <a href="/" className="link-item" ref={navHome}>
          Home
        </a>
      </li>
      <li className="item">
        <FaBriefcase />
        <a href="/project" className="link-item project">
          Project
        </a>
      </li>
      <li className="item">
        <FaMedal />
        <a href="/certification" className="link-item about">
          Certification
        </a>
      </li>
      <li className="item">
        <FaRegAddressBook />
        <a href="/contact" className="link-item contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default ListItems;
