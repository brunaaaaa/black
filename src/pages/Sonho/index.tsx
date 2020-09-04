import React from 'react';

import './styles.css'

import sonhoImg from '../../assets/imgs/sonho.svg';
import moto from '../../assets/imgs/sonho-moto.png';

function Sonho() {
  return (
    <div id="sonho">
      <img src={sonhoImg} alt="Cofrinho dos sonhos"/>
      <h2>Cofrinho dos sonhos</h2>

      <div id="sonho-info">
        <div className="grid">
          <h3>Saldo Total:</h3>
          <h3>R$ 78,45</h3>
        </div>
        <div className="grid">
          <h3>Meta:</h3>
          <h3>R$ 7.500,00</h3>
        </div>

        <h4>Você está <span className="destaque">1.04%</span> mais perto de conquistar sua <span className="destaque">moto</span>!</h4>
        
        <h4>Sonhos / Objetivos cadastrados</h4>
        
        <div className="each-dream">
          <img src={moto} alt="Foto do sonho"/>
          <div className="dream-info">
            <p><strong>Título:</strong> Moto</p>
            <p><strong>Valor:</strong> R$ 7.500,00</p>
            <p><strong>Descrição:</strong> Yamaha Neo 125</p>
          </div>
        </div>

        <div className="add-dream">
          <span className="iconify add" data-icon="ant-design:plus-circle-outlined" data-inline="false"></span>
          <span>Cadastrar novo Sonho / Objetivo</span>
        </div>
      </div>
    </div>
  )
}

export default Sonho;