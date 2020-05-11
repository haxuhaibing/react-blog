import React from 'react';
import {Row, Col} from 'antd';
import './index.scss'
import logo from "../../assets/images/logo.png"

import {Link} from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  componentDidMount() {}
  render() {
    return (<div style={{
        height: 55 + 'px'
      }}>
      <header className="navbar-header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <ul className="navbar-nav">
            <li><Link to="/">首页</Link></li>
            <li>分页</li>
            <li>关于我</li>
          </ul>
        </div>
      </header>
    </div>);
  }
}

export default Header;
