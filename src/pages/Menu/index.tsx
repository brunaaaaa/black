import React from 'react';

import './styles.css'

import img1 from '../../assets/imgs/menu-fatura.svg';
import img2 from '../../assets/imgs/menu-limite.svg';
import img3 from '../../assets/imgs/menu-sonho.svg';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div id="menu">
      <Link to="/fatura" className="menu-link">
        <div className="menu-card">
          <img src={img1} alt="Fatura atual"/>
          <h2>Fatura atual</h2>
          <p>Come on, flip the pickle, Morty. You're not gonna regret it.</p>
        </div>
      </Link>

      <Link to="/limite" className="menu-link">
        <div className="menu-card">
          <img src={img2} alt="Limite de crédito"/>
          <h2>Limite de crédito</h2>
          <p>Come on, flip the pickle, Morty. You're not gonna regret it.</p>
        </div>
      </Link>

      <Link to="/sonho" className="menu-link">
        <div className="menu-card">
          <img src={img3} alt="Cofrinho dos sonhos"/>
          <h2>Cofrinho dos sonhos</h2>
          <p>Come on, flip the pickle, Morty. You're not gonna regret it.</p>
        </div>
      </Link>
    </div>
  )
}

export default Menu;