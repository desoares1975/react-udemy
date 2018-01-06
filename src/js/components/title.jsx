import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'time': new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    this.setState({'time': new Date()});
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>React.JS Rules {this.state.time.toLocaleTimeString()}</h1>;
  }
}

export default Title;