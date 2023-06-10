import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Checkbox, Button } from "antd";
import "./LoginPage.css";
import { NavBtnLink } from "../../../components/Navbar/NavbarELements";

const LoginCase = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://img.freepik.com/free-vector/time-management-landing-page-concept_52683-25264.jpg?w=740&t=st=1686030479~exp=1686031079~hmac=c242cf979d2b179533d356aa32e0901e0645dcd2f45a3be4c1a7aca656fe3238"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          id="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <a href="/MgmtLandingPage">LOGIN</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

ReactDOM.render(<LoginCase />, document.getElementById("root"));
export default LoginCase;
