import React from 'react';
import NavMenu from './nav-menu';
import Axios from 'axios';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'menu': []};
  }

  componentDidMount() {
    Axios.get('http://localhost:8808/menu')
    .then(res => {
      this.setState({'menu': res.data});
    })
    .catch(e => console.log(e));
  }

  render() {
    let navClass = `nav-wrapper ${this.props.color}`;

    return (
        <nav>
          <div className={navClass}>
            <div className="container">
              <a href="#" className="brand-logo">{this.props.title}</a>
              <NavMenu menu={this.state.menu} />
            </div>
          </div>
        </nav>
      );
  }
}

export default Navbar;