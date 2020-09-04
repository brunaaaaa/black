import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import firebase from 'firebase';

import './styles.css';

import faturaImg from '../../assets/imgs/fatura.svg';

function Fatura() {
  const [extrato, setExtrato] = useState([]);
  const [saldo, setSaldo] = useState('');

  // console.log(extrato);

  function getRefFireBase() {
    const db = firebase.database().ref(`extrato/`);
    return db;
  }

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

  // useEffect(() => {
  //   const db = getRefFireBase();
  //   let valor = 35.8;
  //   db.push().set({
  //     historico: 'TED CRED',
  //     tipo: 1,
  //     valor,
  //     cofre: valor * 0.05,
  //     time: firebase.database.ServerValue.TIMESTAMP,
  //   });
  // }, []);

  useEffect(() => {
    const db = getRefFireBase();
    db.on('value', (snapshot) => {
      let data = [];

      const keys = Object.keys(snapshot.val());
      keys.map((key) => {
        data.push({
          historico: snapshot.val()[key].historico,
          tipo: snapshot.val()[key].tipo,
          valor: snapshot.val()[key].valor,
          cofre: snapshot.val()[key].cofre,
          time: snapshot.val()[key].time,
        });
      });
      setExtrato(data);
    });

    const saldoRef = firebase.database().ref('saldo');
    saldoRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }, []);

  return (
    <div id="fatura">
      <img src={faturaImg} alt="Fatura atual" />
      <h2>Fatura atual</h2>
      <div id="transactions">
        <h2>Últimas transações</h2>

        {extrato.map((item, index) => (
          <div key={index}>
            <div className="row">
              <span
                className="iconify piggy"
                data-inline="false"
                data-icon="clarity:savings-line"
              ></span>
              <p className="price">R$ {item.cofre}</p>
              <div className="info">
                <p>Cofrinho</p>
              </div>
            </div>

            <div className="row">
              <span
                className="iconify sub"
                className={item.tipo === 2 ? 'iconify sum' : 'iconify sub'}
                data-inline="false"
                data-icon="ant-design:minus-outlined"
                data-icon={
                  item.tipo === 2
                    ? 'ant-design:plus'
                    : 'ant-design:minus-outlined'
                }
              ></span>
              <p className="price">{item.valor}</p>
              <div className="info">
                <small className="time">
                  {dayjs(item.time).format('DD-MM')}
                </small>
                <p>{item.historico}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fatura;
