import React from 'react';

import './styles.css';

import avatarImg from '../../assets/imgs/avatar.svg';
import img0 from '../../assets/imgs/olho.svg';
import img1 from '../../assets/imgs/menu-fatura.svg';
import img2 from '../../assets/imgs/menu-sonho.svg';
import img3 from '../../assets/imgs/menu-pagar.svg';
import img4 from '../../assets/imgs/menu-limite.svg';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div id="menu">
      <img src={avatarImg} alt="Avatar do usuário" id="avatar"/>

      <div id="saldo-info">
        <h2>Saldo:</h2>
        <h2>R$ 607,50 <img src={img0} alt="Ícone saldo"/></h2>
      </div>

      <div id="menu-options">
        <Link to="/fatura" className="menu-link">
          <div className="menu-card">
            <img src={img1} alt="Fatura atual" />
            <p>Fatura atual</p>
          </div>
        </Link>
        
        <Link to="/sonho" className="menu-link">
          <div className="menu-card">
            <img src={img2} alt="Cofrinho dos sonhos" />
            <p>Cofrinho dos sonhos</p>
          </div>
        </Link>

        <Link to="/pagamentos" className="menu-link">
          <div className="menu-card">
            <img src={img3} alt="Pagar conta" />
            <p>Pagar e Transferir</p>
          </div>
        </Link>        
        
        <Link to="/limite" className="menu-link">
          <div className="menu-card">
            <img src={img4} alt="Limite" />
            <p>Limite</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
