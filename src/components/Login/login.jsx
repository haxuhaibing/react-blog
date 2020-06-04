import React from "react";
import { connect } from "react-redux";
import { userInfoAction } from "../../actions";
import { getUserInfo } from "../../api/user";

import { Modal, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.scss";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      username: "",
      password: "",
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  //用户名
  onInputUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  //密码
  onInputPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    let onFinish = () => {
      
      // getUserInfo({
      //   username: this.state.username,
      //   password: this.state.password,
      // }).then((res) => {
      //   console.log(res);
      //   this.props.sendAction(res);
      // });

       
      getUserInfo({
        username: 'xuhaibing',
        password: '123456',
      }).then((res) => {
        console.log(res);
        this.props.sendAction(res);
            this.setState({
              visible: false
            });
      });
 
    };
    function onFinishFailed() {}

    return (
      <div>
        <Modal
          title="登录"
          footer={null}
          bodyStyle={{ paddingBottom: "1px" }}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ message: "Please input your username!" }]}
            >
              <Input
                allowClear
                prefix={<UserOutlined className="site-form-item-icon" />}
                value={this.state.username}
                onChange={(e) => this.onInputUsername(e)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ message: "Please input your password!" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                value={this.state.password}
                onChange={(e) => this.onInputPassword(e)}
              />
            </Form.Item>
            <Form.Item>
              <Button block size="large" type="primary" htmlType="submit">
                确定
              </Button>
              {/* <div>{store.value}</div> */}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

//出发dispatch
const mapDisparchProps = (dispatch) => {
  return {
    sendAction: (data) => {
      dispatch(userInfoAction(data));
    },
  };
};
//接收store
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userInfo: state.rootReducer.userInfo,
  };
};
export default connect(mapStateToProps, mapDisparchProps)(Login);
