/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-06 13:48:37
 * @LastEditTime: 2021-08-12 10:33:07
 */

import React, { useState } from "react";
import { Card, Divider, Button, Typography } from "antd";
import Login from "./Login";
import Register from "./Register";
import styled from "@emotion/styled";
import { useDocumentTitle } from "utils/utils";

const UnAuthEntiCatedApp = () => {
  const [isRegister, setRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useDocumentTitle("Jira", false);
  return (
    <Container>
      <Header>Jira</Header>
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {error ? (
          <Typography.Text type={"danger"}>{error.message}</Typography.Text>
        ) : null}
        <div></div>
        {isRegister ? (
          <Register onError={setError}></Register>
        ) : (
          <Login onError={setError}></Login>
        )}
        <Divider />
        <Button type={"link"} onClick={() => setRegister(!isRegister)}>
          {isRegister ? "已注册账号? 直接登录" : "去注册"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

export default UnAuthEntiCatedApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  font-size: 3rem;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 40rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
export const LongButton = styled(Button)`
  width: 100%;
`;
export const Title = styled.h1``;
