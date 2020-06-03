import React from "react";
//  import { store } from "../../store";
import { Modal, Button, Form, Input } from "antd";
import {
 
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
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
      visible: true,
      username: "",
      password: "",
    };
  }
  showModal =()=> {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
 
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
 
    this.setState({
      visible: false,
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

  render(){
    function onFinish() {}
    function onFinishFailed() {}
    return (
      <div>
        <Modal
          title="登录"
          footer={null}
          bodyStyle={{paddingBottom:'1px'}}
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
              <Button
                block
                size="large"
                
                type="primary"
                htmlType="submit"
              >
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
export default Login;
