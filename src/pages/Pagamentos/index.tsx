import React from 'react';

import './styles.css';

import pagarImg from '../../assets/imgs/pagamentos.svg';

function Pagamentos() {
  return (
    <div id="pagamentos">
      <img src={pagarImg} alt="Pagar conta"/>

      <h2>Pagar Conta</h2>

      <div id="pagar-boleto">
        <h2>Insira os códigos do boleto a pagar</h2>

        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text" id="pegar-codigo"/>

        <button>Pagar</button>
      </div>
    </div>
  )
}

export default Pagamentos;