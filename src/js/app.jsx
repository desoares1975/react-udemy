import ReactDOM from 'react-dom';
import React from 'react';
import Title from './components/title'
import Navbar from './components/navbar'

let App = (
    <div className="container">
      <Navbar title="React.JS" color="orange" />
      <Title />
    </div>
  );

ReactDOM.render(App, document.getElementById('app'));