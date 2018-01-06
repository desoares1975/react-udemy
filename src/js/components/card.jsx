import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.addClicks = this.props.addClick;
  }

  
  render() {
    return (
      <div className="card stick-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img onClick={this.addClicks} className="activator" src={this.props.data.image} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.data.title} <i className="material-icons right">more_vert</i>
          </span>
          <p>{this.props.data.description}</p>
        </div>
        <div className="card-action">
          <a href="#" className="activator">See more</a>
        </div>
        <div className="card-reveal">
          <span className="card-title activator grey-text text-darken-4">
            Title <i className="material-icons right">close</i>
          </span>
          <p>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;