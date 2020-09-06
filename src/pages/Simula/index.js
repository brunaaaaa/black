import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import './styles.css';

import pagarImg from '../../assets/imgs/pagamentos.svg';

function Simula() {
  const [saldo, setSaldo] = useState('');
  const [codigo, setCodigo] = useState('');
  const [limite, setLimite] = useState('');
  const [cofrinho, setCofrinho] = useState('');

  console.log(typeof codigo);
  console.log(typeof saldo);

  useEffect(() => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyD_2S-kUX9FbgzVUEqTZ6xyMo6HAgCgI7A',
      authDomain: 'contablack-1c901.firebaseapp.com',
      databaseURL: 'https://contablack-1c901.firebaseio.com',
      projectId: 'contablack-1c901',
      storageBucket: 'contablack-1c901.appspot.com',
      messagingSenderId: '111045977231',
      appId: '1:111045977231:web:85bc9120d88d008c7d7cfa',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);

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
      setSaldo(parseFloat(snapshot.val()));
    });

    const limite = getRefFireBase(value2);
    limite.on('value', (snapshot) => {
      setLimite(parseFloat(snapshot.val()));
    });

    const cofrinho = getRefFireBase(value3);
    cofrinho.on('value', (snapshot) => {
      setCofrinho(parseFloat(snapshot.val()));
    });
  }

  function handleChangeValor(e) {
    setCodigo(e.target.value);
  }

  function handleSubmit() {
    //Simula credito

    const valor = parseFloat(codigo);
    const extratoRef = getRefFireBase('extrato');
    extratoRef.push().set({
      historico: 'TED CRED',
      tipo: 2,
      valor,
      cofre: codigo * 0.05,
      time: firebase.database.ServerValue.TIMESTAMP,
    });

    const novoLimite = valor * 0.1 + limite;
    const limiteRef = getRefFireBase('limite');
    limiteRef.set(novoLimite);

    const novoCofre = valor * 0.05 + cofrinho;
    const cofreRef = getRefFireBase('cofrinho');
    cofreRef.set(novoCofre);

    const novoSaldo = valor + saldo;
    const saldoRef = getRefFireBase('saldo');
    saldoRef.set(novoSaldo);

    setCodigo('');
  }

  return (
    <div id="pagamentos">
      <img src={pagarImg} alt="Pagar conta" />

      <h2>Simulador de Crédito em Conta</h2>

      <div id="pagar-boleto">
        <h2>Insira o valor para creditar</h2>

        <input
          type="text"
          id="pegar-codigo"
          maxLength={15}
          value={codigo}
          onChange={handleChangeValor}
        />

        <button onClick={handleSubmit}>Creditar</button>
      </div>
    </div>
  );
}

export default Simula;
