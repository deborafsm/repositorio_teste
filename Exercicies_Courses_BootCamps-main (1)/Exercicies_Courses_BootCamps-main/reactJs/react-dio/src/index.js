import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//Aonde está rodando a aplicação
ReactDOM.render( //Recebe dois parametros QUE SÃO: 
  //O que será redenrizado 
    <App/>,
 //Onde será redenrizado
  document.getElementById('root') //DIV de id root
);


