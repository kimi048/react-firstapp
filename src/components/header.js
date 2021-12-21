import React, { Component } from 'react';
// const Header = () => {
//   return <div>Header{ Date.now() }</div>
// }
class Header extends Component {
  state = {
    active: 'active',
    keywords:''
  }
  render() {
    return (
      <header>
        hogehoge
        <input onChange={this.props.keywords}/>
      </header>
    )
  }
}

export default Header;