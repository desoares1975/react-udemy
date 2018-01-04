import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card stick-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="http://materializecss.com/images/office.jpg">
        </div>
        <div className="card-content"> 
          <span className="card-title activator grey-text text-darken-4">
            Card Title
            <i className="material-icons right">more_vert</i>
          </span>
          <p>Description</p>
          <div className="card-action">
            <a href="#">Ver mais</a>
          </div>
          
        </div>
        <div classnam>
      </div>
    );
  }
}