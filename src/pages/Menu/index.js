import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import './styles.css';

//import avatarImg from '../../assets/imgs/avatar.svg';
import avatarImg from '../../assets/imgs/avatar.png';
//import img0 from '../../assets/imgs/olho.svg';
import img1 from '../../assets/imgs/menu-fatura.svg';
import img2 from '../../assets/imgs/menu-sonho.svg';
import img3 from '../../assets/imgs/menu-pagar.svg';
import img4 from '../../assets/imgs/menu-limite.svg';
import { Link } from 'react-router-dom';

function Menu() {
  const [saldo, setSaldo] = useState();
  const [cofrinho, setCofrinho] = useState();

  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

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
    getAccountData('saldo', 'cofrinho');
  }, []);

  function getRefFireBase(value) {
    const db = firebase.database().ref(`${value}/`);
    return db;
  }

  function getAccountData(value1, value2) {
    const saldo = getRefFireBase(value1);
    saldo.on('value', (snapshot) => {
      setSaldo(snapshot.val());
    });

    const cofrinho = getRefFireBase(value2);
    cofrinho.on('value', (snapshot) => {
      setCofrinho(snapshot.val());
    });
  }

  return (
    <div id="menu">
     <Link to="/">
        <span className="iconify go-back" data-icon="ic:round-arrow-back" data-inline="false" />
     </Link>

      <div id="avatar">
        <img src={avatarImg} alt="Avatar do usuário" />
      </div>

      <div id="saldo-info">
        <h2 className="label-text">Saldo:</h2>
        <h3 className="value">{formatter.format(saldo)}</h3>
        <h3 className="label-text">Cofrinho:</h3>
        <h4 className="value">{formatter.format(parseFloat(cofrinho))}</h4>
      </div>

      <div id="menu-options">
        <Link to="/fatura" className="menu-link">
          <div className="menu-card">
            <img src={img1} alt="Extrato" />
            <p>Extrato</p>
          </div>
        </Link>

        <Link to="/sonho" className="menu-link">
          <div className="menu-card">
            <img src={img2} alt="Sonhos" />
            <p>Sonhos</p>
          </div>
        </Link>

        <Link to="/pagamentos" className="menu-link">
          <div className="menu-card">
            <img src={img3} alt="Pagar conta" />
            <p>Pagamentos</p>
          </div>
        </Link>

        <Link to="/limite" className="menu-link">
          <div className="menu-card">
            <img src={img4} alt="Limite" />
            <p>Seu Limite</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
