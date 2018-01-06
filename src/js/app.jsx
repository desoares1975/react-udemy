import ReactDOM from 'react-dom';
import React from 'react';
import Title from './components/title';
import Navbar from './components/navbar';
import CardListing from './components/card-listing';

let App = (
    <div className="container">
      <Navbar title="React.JS" color="orange" />
      <Title />
      <div className="row">
        <CardListing colsPerRows="2" colSize="6" />
      </div>
    </div>
  );

ReactDOM.render(App, document.getElementById('app'));