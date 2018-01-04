import React from 'react';

class NavMenu extends React.Component {
  render() {
    let list = this.props.menu.map(item => {
      return (
        <li key={item.link}><a href={item.link}>{item.title}</a></li>
      );
    });

    return (
        <ul id="nav-mobile" className="right">
          {list}
        </ul>
      );
  }
}

export default NavMenu;