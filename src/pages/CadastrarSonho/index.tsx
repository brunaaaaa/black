import React from 'react';

import './styles.css';

import sonhoImg from '../../assets/imgs/sonho.svg';

function CadastrarSonho() {
  return (
    <div id="cadastrar-sonho">
      <div id="topo">
        <img src={sonhoImg} alt="Cofrinho dos sonhos"/>
        <h2>Cofrinho dos sonhos</h2>
      </div>

      <div id="cadastro">
        <h2>Cadastrar novo Sonho / Objetivo</h2>

        <div id="form-cadastro-sonho">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" id="titulo" placeholder="Ex.: comprar terreno" />
          
          <label htmlFor="preco">Quanto pretende juntar?</label>
          <input type="text" name="preco" id="preco" placeholder="Ex.: 13.000,00"/>
          
          <label htmlFor="descricao">Descrição</label>
          <textarea name="descricao" id="descricao" placeholder="Ex.: Quero comprar um terreno para montar um pequeno comércio"></textarea>
          
          <input type="file" name="uploadimg" id="uploadimg"/>
        </div>

        <button>Cadastrar</button>
        
      </div>
    </div>
  )
}

export default CadastrarSonho;