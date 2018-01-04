import React from 'react';
import NavMenu from './nav-menu';

class Navbar extends React.Component {
  render() {
    let menu = [
      {'title': 'Home', 'link': '#home'},
      {'title': 'Sobre', 'link': '#about'},
      {'title': 'Contato', 'link': '#link'}
    ];

    let navClass = `nav-wrapper ${this.props.color}`;

    return (
        <nav>
          <div className={navClass}>
            <div className="container">
              <a href="#" className="brand-logo">{this.props.title}</a>
              <NavMenu menu={menu} />
            </div>
          </div>
        </nav>
      );
  }
}

export default Navbar;