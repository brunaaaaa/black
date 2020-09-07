import React from 'react';

import './styles.css';

import homeImg from '../../assets/imgs/home.svg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="home" className="container">
      <img src={homeImg} alt="Credit card"/>
      <h1 id="home-title"><span id="thin">dream</span> blck</h1>
      <h2>uma nova forma de proporcionar crédito</h2>

      <Link to="/menu">
        <button>Entrar</button>
      </Link>
      
      <p>Não tenho conta black.</p>
      <a href="#linkvazio">Cadastrar-se</a>
    </div>
  )
}

export default Home;