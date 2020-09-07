import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import firebase from 'firebase';

import './styles.css';

import faturaImg from '../../assets/imgs/fatura.svg';

function Fatura() {
  const [extrato, setExtrato] = useState([]);

  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  function getRefFireBase() {
    const db = firebase.database().ref(`extrato/`);
    return db;
  }

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
  }, []);

  return (
    <div id="fatura">
      <img src={faturaImg} alt="Extrato" />
      <h2>Extrato</h2>
      <div id="transactions">
        <h3>Últimas transações</h3>

        {extrato.reverse().map((item, index) => (
          <div key={index}>
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
              <p className="price">{formatter.format(item.valor)}</p>
              <div className="info">
                <small className="time">
                  {dayjs(item.time).format('DD-MM')}
                </small>
                <p>{item.historico}</p>
              </div>
            </div>

            <div className="row">
              <span
                className="iconify piggy"
                data-inline="false"
                data-icon="clarity:savings-line"
              ></span>
              <p className="price">{formatter.format(item.cofre)}</p>
              <div className="info">
                <p>Cofrinho</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fatura;
