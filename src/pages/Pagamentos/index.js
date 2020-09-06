import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import './styles.css';

import pagarImg from '../../assets/imgs/pagamentos.svg';

function Pagamentos() {
  const [saldo, setSaldo] = useState('');
  const [codigo, setCodigo] = useState('');
  const [historico, setHistorico] = useState('');
  //const [valor, setValor] = useState('');
  const [limite, setLimite] = useState('');
  const [cofrinho, setCofrinho] = useState('');

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  useEffect(() => {
    getAccountData('saldo', 'limite', 'cofrinho');
  }, []);

  function getRefFireBase(value) {
    const db = firebase.database().ref(`${value}/`);
    return db;
  }

  function getAccountData(value1, value2, value3) {
    const saldo = getRefFireBase(value1);
    saldo.on('value', (snapshot) => {
      setSaldo(snapshot.val());
    });

    const limite = getRefFireBase(value2);
    limite.on('value', (snapshot) => {
      setLimite(snapshot.val());
    });

    const cofrinho = getRefFireBase(value3);
    cofrinho.on('value', (snapshot) => {
      setCofrinho(snapshot.val());
    });
  }

  function handleChangeValor(e) {
    setCodigo(e.target.value);
  }
  function handleChangeValor1(e) {
    setInput1(e.target.value);
  }
  function handleChangeValor2(e) {
    setInput2(e.target.value);
  }
  function handleChangeValor3(e) {
    setInput3(e.target.value);
  }

  function handleChangeHistorico(e) {
    setHistorico(e.target.value);
  }

  function handleSubmit() {
    const arrCodigo = codigo.split('');
    const index = arrCodigo.indexOf('0');
    const valorString = arrCodigo.slice(index, arrCodigo.length);
    valorString.splice(valorString.length - 2, 0, '.');

    const valor = parseFloat(valorString.join(''));

    const novoSaldo = saldo - valor;
    const novoCofre = valor * 0.01;
    const novoLimite = valor * 0.05;

    const saldoRef = firebase.database().ref('saldo/');
    saldoRef.set(novoSaldo);
    const cofrinhoRef = firebase.database().ref('cofrinho/');
    cofrinhoRef.set(novoCofre + cofrinho);
    const limiteRef = firebase.database().ref('limite/');
    limiteRef.set(novoLimite + limite);

    const extratoRef = firebase.database().ref('extrato/');

    extratoRef.push().set({
      historico: historico.toUpperCase(),
      tipo: 1,
      valor,
      cofre: valor * 0.01,
      time: firebase.database.ServerValue.TIMESTAMP,
    });

    setCodigo('');
    setInput1('');
    setInput2('');
    setInput3('');
    setHistorico('');
  }

  return (
    <div id="pagamentos">
      <img src={pagarImg} alt="Pagar conta" />

      <h2>Pagar Conta</h2>

      <div id="pagar-boleto">
        <h2>Insira o código</h2>

        <input
          autoFocus
          type="text"
          maxLength={10}
          value={input1}
          onChange={handleChangeValor1}
        />
        <input
          type="text"
          maxLength={11}
          value={input2}
          onChange={handleChangeValor2}
        />
        <input
          type="text"
          maxLength={11}
          value={input3}
          onChange={handleChangeValor3}
        />
        <input
          type="text"
          id="pegar-codigo"
          maxLength={12}
          value={codigo}
          onChange={handleChangeValor}
        />
        <label>
          Histórico
          <input
            type="text"
            maxLength={10}
            value={historico}
            onChange={handleChangeHistorico}
            id="historico"
          />
        </label>

        <button onClick={handleSubmit}>Pagar</button>
      </div>
    </div>
  );
}

export default Pagamentos;
