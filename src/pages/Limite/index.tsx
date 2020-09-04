import React from 'react';

import './styles.css'

import limiteImg from '../../assets/imgs/limite.svg';

function Limite() {
  return (
    <div id="limite">
      <img src={limiteImg} alt="Limite"/>
      <h2>Limite</h2>

      <div id="limite-info">
        <h2>Seu limite de crédito atual</h2>
        <h2>R$ 600,00</h2>
        <h3>Aumente seus limites seguindo essas dicas</h3>
        <ul>
          <li>Pague a fatura do seu cartão antes do dia de vencimento</li>
          <li>Coloque dinheiro no cofrinho dos sonhos</li>
          <li>Did you get those seeds all the way up your butt?</li>
          <li>It's called carpe diem Morty. Look it up</li>
        </ul>
      </div>
    </div>
  )
}

export default Limite;