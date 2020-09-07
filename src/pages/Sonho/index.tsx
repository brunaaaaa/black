import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './styles.css';

import sonhoImg from '../../assets/imgs/sonho.svg';
import { Link } from 'react-router-dom';

function Sonho() {
  const [limite, setLimite] = useState('');
  const [cofrinho, setCofrinho] = useState('');
  const [sonhos, setSonhos] = useState([]);

  console.log(cofrinho);

  let meta = sonhos.reduce(function (total: any, currentValue: any) {
    return total + parseFloat(currentValue.meta);
  }, 0);

  let porcentagem = parseFloat(limite) / meta;

  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  let percent = new Intl.NumberFormat([], {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    const cofreRef = firebase.database().ref(`cofrinho/`);
    cofreRef.on('value', (snapshot) => {
      setCofrinho(snapshot.val());

      const limiteRef = firebase.database().ref(`limite/`);
      limiteRef.on('value', (snapshot) => {
        setLimite(snapshot.val());
      });
    });
  }, []);

  useEffect(() => {
    const sonhosRef = firebase.database().ref(`sonhos/`);
    sonhosRef.on('value', (snapshot) => {
      let data = [] as any;

      const keys = Object.keys(snapshot.val());
      keys.map((key) => {
        data.push({
          titulo: snapshot.val()[key].titulo,
          meta: snapshot.val()[key].meta,
          descricao: snapshot.val()[key].descricao,
        });
      });
      setSonhos(data);
    });
  }, []);

  return (
    <div id="sonho">
      <a href="/menu">
        <span className="iconify go-back" data-icon="ic:round-arrow-back" data-inline="false" />
     </a>

      <img src={sonhoImg} alt="Cofrinho dos sonhos" />
      <h2>Cofrinho dos sonhos</h2>

      <div id="sonho-info">
        <div className="grid">
          <h3>Cofrinho:</h3>
          <h3>{formatter.format(parseFloat(cofrinho))}</h3>
        </div>
        <div className="grid">
          <h3>Meta:</h3>
          <h3>{formatter.format(meta)}</h3>
        </div>
        <div className="grid">
          <h3>Limite:</h3>
          <h3>{formatter.format(parseFloat(limite))}</h3>
        </div>

        <h4>
          Você está{' '}
          <span className="destaque">{percent.format(porcentagem)}</span> mais
          perto de conquistar seu <span className="destaque">sonho</span>!
        </h4>

        <h4>SEUS SONHOS</h4>

        {sonhos.map((sonho: any, index) => (
          <div key={index} className="each-dream">
            <div className="dream-info">
              <p>
                <strong>Título:</strong> {sonho.titulo}
              </p>
              <p>
                <strong>Valor: </strong>
                {formatter.format(parseFloat(sonho.meta))}
              </p>
              <p>
                <strong>Descrição:</strong> {sonho.descricao}
              </p>
            </div>
          </div>
        ))}

        <div className="add-dream">
          <Link to="/cadastrarsonho">
            <span
              className="iconify add"
              data-icon="ant-design:plus-circle-outlined"
              data-inline="false"
            ></span>
          </Link>
          <Link to="/cadastrarsonho">Novo Sonho</Link>
        </div>
      </div>
    </div>
  );
}

export default Sonho;
