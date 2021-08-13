/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-06 14:12:52
 * @LastEditTime: 2021-08-12 11:55:10
 */
import React from "react";
import ProductList from "../../components/ProductList/index";
import Product from "../Product/Product";
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "../../components/lib";
import { resetRoute, useDocumentTitle } from "utils/utils";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

const AuthEntiCatedApp = () => {
  useDocumentTitle("项目列表", false);
  return (
    <Container>
      <PageHeader></PageHeader>
      <Main>
        <Router>
          <Routes>
            <Route path={"/products"} element={<ProductList />}></Route>
            <Route
              path={"/products/:productId/*"}
              element={<Product />}
            ></Route>
            <Navigate to={"/products"}></Navigate>
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

export default AuthEntiCatedApp;

const Container = styled.div`
  /* display: grid; */
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <h2>
          <Button
            type={"text"}
            onClick={() => {
              resetRoute();
            }}
          >
            Jiras
          </Button>
        </h2>
        <h2>项目</h2>
        <h2>设置</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button onClick={logout} type={"link"}>
                  退出登录
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={"link"} onClick={(e) => e.preventDefault()}>
            {" "}
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};
