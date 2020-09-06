import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import './styles.css';

import sonhoImg from '../../assets/imgs/sonho.svg';

function CadastrarSonho() {
  const [titulo, setTitulo] = useState('');
  const [meta, setMeta] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleChangeTitulo(e: React.ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }
  function handleChangeMeta(e: React.ChangeEvent<HTMLInputElement>) {
    setMeta(e.target.value);
  }
  function handleChangeDesc(e: React.ChangeEvent<HTMLInputElement>) {
    setDescricao(e.target.value);
  }

  function handleSubmit() {
    const x = meta.replace('.', '');
    const y = x.replace(',', '.');

    const novoSonho = {
      titulo,
      meta: y,
      descricao,
    };

    //console.log(novoSonho);

    const refSonho = firebase.database().ref('sonhos');
    refSonho.push().set(novoSonho);

    clear();
  }

  function clear() {
    setTitulo('');
    setMeta('');
    setDescricao('');
  }

  return (
    <div id="cadastrar-sonho">
      <div id="topo">
        <img src={sonhoImg} alt="Cofrinho dos sonhos" />
        <h2>Sonhos</h2>
      </div>

      <div id="cadastro">
        <h3>Cadastrar novo Sonho</h3>

        <div id="form-cadastro-sonho">
          <label htmlFor="titulo">Título</label>
          <input
            autoFocus
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Ex.: Fazer um curso"
            value={titulo}
            onChange={handleChangeTitulo}
          />

          <label htmlFor="preco">Quanto pretende juntar?</label>
          <input
            type="text"
            name="preco"
            id="preco"
            placeholder="Ex.: 4.000,00"
            value={meta}
            onChange={handleChangeMeta}
          />

          <label htmlFor="descricao">Descrição</label>
          <input
            name="descricao"
            id="descricao"
            placeholder="Ex.: Curso de iluminação e composição"
            value={descricao}
            onChange={handleChangeDesc}
          ></input>
        </div>

        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastrarSonho;
