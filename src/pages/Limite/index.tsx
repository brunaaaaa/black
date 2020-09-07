import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import './styles.css';

import limiteImg from '../../assets/imgs/limite.svg';

function Limite() {
  const [limite, setLimite] = useState('');

  useEffect(() => {
    const saldoRef = firebase.database().ref('limite');
    saldoRef.on('value', (snapshot) => {
      setLimite(snapshot.val());
    });
  }, []);

  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div id="limite">
      <a href="/menu">
        <span className="iconify go-back" data-icon="ic:round-arrow-back" data-inline="false" />
      </a>
      <img src={limiteImg} alt="Limite" />
      <h2>Limite</h2>

      <div id="limite-info">
        <h2>Seu limite de crédito atual</h2>
        <h2>{formatter.format(parseFloat(limite))}</h2>
        <h3>Aumente seu limite seguindo estas dicas:</h3>
        <ul>
          <li>Faça da sua Conta blck. a sua principal conta de movimentação</li>
          <li>
            Use o saldo do seu cofrinho dos sonhos para pagar a sua fatura
          </li>
          <li>Pague a fatura do seu cartão antes do dia de vencimento</li>
          <li>Coloque dinheiro no cofrinho dos sonhos</li>
        </ul>
      </div>
    </div>
  );
}

export default Limite;
