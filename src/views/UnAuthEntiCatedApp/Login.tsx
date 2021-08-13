/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-05 16:55:43
 * @LastEditTime: 2021-08-10 15:46:55
 */

import React from "react";
import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./UnAuthEntiCatedApp";
import { useAsync } from "../../utils/use-async";

const Login = ({ onError }: { onError: (error: any) => void }) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(values));
    } catch (e) {
      onError(e);
    }
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input type="text" id={"username"} placeholder={"用户名"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" id={"password"} placeholder={"密码"} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type={"primary"} htmlType={"submit"}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export default Login;
