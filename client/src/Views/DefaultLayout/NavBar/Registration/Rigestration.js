import React from "react";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import styles from "./registration.module.scss";
import { useStores } from "../../../../customHooks/useStores";

const Registration = observer(() => {
  const store = useStores().PersonStore;
  const toRegistrate = (values) => {
    console.log(values);
    store.regUser(values);
  };
  return (
    <div className={styles.block}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={toRegistrate}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nickname"
          name="nickname"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Password confirmation"
          name="PasswordСonfirmation"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 46,
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Registration;
