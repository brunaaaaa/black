import React from 'react';

import './styles.css'

import loginImg from '../../assets/imgs/login.svg'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div id="login">
      <img src={loginImg} alt="User information"/>

      <h2>Entrar na plataforma</h2>

      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" id="email"/>
      <label htmlFor="senha">Senha:</label>
      <input type="password" name="senha" id="senha"/>

      <Link to="/menu">
        <button>Entrar</button>
      </Link>

      <p>Não tenho conta black.</p>
      <a href="#linkvazio">Cadastrar-se</a>
    </div>
  )
}

export default Login;