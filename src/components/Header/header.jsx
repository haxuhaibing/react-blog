import React from 'react';
import { Menu, Dropdown, Avatar  } from 'antd';
 
import './index.scss'
import logo from "../../assets/images/logo.png"
 
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">个人主页</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">发布文章</a>
    </Menu.Item>
    <Menu.Item key="3">退出</Menu.Item>
  </Menu>
);
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  
  };

  render() {
    let isLoggedIn =this.state.isLogin;
    function IsLogin(props) {
      if (isLoggedIn) {
        return (
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a>
          </Dropdown>
        )

      }
      else {
        return "登录"
      }
 
    }

   
    return (<div style={{
      height: 55 + 'px'
    }}>
      <header className="navbar-header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="navbar-nav">
            <li>首页</li>
            <li>分页</li>
            <li>关于我</li>
          </ul>
          <IsLogin/>
        </div>
      </header>
      
    </div>);
  }
}

export default Header;
