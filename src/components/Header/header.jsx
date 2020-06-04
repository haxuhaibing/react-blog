import React from 'react';
import { Menu, Dropdown, Avatar  } from 'antd';
 import { connect } from "react-redux";
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
  };

  render() {
    let avatar = this.props.userInfo.avatar;
 let IsLogin = () => {
   if (Object.keys(this.props.userInfo).length !== 0) {
     return (
       <Dropdown overlay={menu}>
         <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
           <Avatar src={avatar} />
         </a>
       </Dropdown>
     );
   } else {
     return (<div>登录</div>);
   }
 };

 
 

   
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

 
//出发dispatch
// const mapDisparchProps = (dispatch) => {
//   return {
//     sendAction: (data) => {
//       dispatch(userInfoAction(data));
//     },
//   };
// };
//接收store
const mapStateToProps = (state) => {
  return {
    userInfo: state.rootReducer.userInfo,
  };
};
export default connect(mapStateToProps, null)(Header);