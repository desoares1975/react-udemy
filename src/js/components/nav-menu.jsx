import React from 'react';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'activeMenu': 'Home'
    };
  }

  activate(title, self) {
    self.setState({'activeMenu': title});
  }

  render() {
    let list = this.props.menu.map(item => {
      return (
        <li key={item.link} onClick={this.activate.bind(null, item.title, this)} className={this.state.activeMenu === item.title ? 'active' : ''}>
          <a href={item.link}>{item.title}</a>
        </li>
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