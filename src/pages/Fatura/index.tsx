import React from 'react';

import './styles.css'

import faturaImg from '../../assets/imgs/fatura.svg';

function Fatura() {
  return (
    <div id="fatura">
      <img src={faturaImg} alt="Fatura atual"/>
      <h2>Fatura atual</h2>
      <div id="transactions">
        <h2>Últimas transações</h2>
        <div className="row">
          <span className="iconify piggy" data-inline="false" data-icon="clarity:savings-line"></span>
          <p className="price">R$ 0,50</p>
          <div className="info">
            <small className="time">9:25</small>
            <p>Cofrinho</p>
          </div>
        </div>

        <div className="row">
          <span className="iconify sub" data-inline="false" data-icon="ant-design:minus-outlined"></span>
          <p className="price">R$ 8,50</p>
          <div className="info">
            <small className="time">9:25</small>
            <p>Ebanx*Spotify</p>
          </div>
        </div>
        
        <div className="row">
          <span className="iconify piggy" data-inline="false" data-icon="clarity:savings-line"></span>
          <p className="price">R$ 0,70</p>
          <div className="info">
            <small className="time">8:28</small>
            <p>Cofrinho</p>
          </div>
        </div>

        <div className="row">
          <span className="iconify sub" data-inline="false" data-icon="ant-design:minus-outlined"></span>
          <p className="price">R$ 35,70</p>
          <div className="info">
            <small className="time">8:28</small>
            <p>Amazon</p>
          </div>
        </div>

        <div className="row">
          <span className="iconify piggy" data-inline="false" data-icon="clarity:savings-line"></span>
          <p className="price">R$ 1,00</p>
          <div className="info">
            <small className="time">7:00</small>
            <p>Cofrinho</p>
          </div>
        </div>

        <div className="row">
          <span className="iconify sub" data-inline="false" data-icon="ant-design:minus-outlined"></span>
          <p className="price">R$ 57,70</p>
          <div className="info">
            <small className="time">7:00</small>
            <p>Submarino</p>
          </div>
        </div>

        <div className="month-divider">
          <small>Agosto</small>
        </div>

        <div className="row">
          <span className="iconify piggy" data-inline="false" data-icon="clarity:savings-line"></span>
          <p className="price">R$ 1,15</p>
          <div className="info">
            <small className="time">28 Ago</small>
            <p>Cofrinho</p>
          </div>
        </div>

        <div className="row">
          <span className="iconify sub" data-inline="false" data-icon="ant-design:minus-outlined"></span>
          <p className="price">R$ 250,00</p>
          <div className="info">
            <small className="time">28 Ago</small>
            <p>Ebanx*Spotify</p>
          </div>
        </div>
        
        <div className="row">
          <span className="iconify piggy" data-inline="false" data-icon="clarity:savings-line"></span>
          <p className="price">R$ 1,00</p>
          <div className="info">
            <small className="time">27 Ago</small>
            <p>Cofrinho</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fatura;