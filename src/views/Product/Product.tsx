/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-12 11:10:54
 * @LastEditTime: 2021-08-12 11:55:53
 */
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import Kanban from "views/Kanban/Kanban";
import Topic from "views/Topic/Topic";

const Product = () => {
  return (
    <div>
      <LinkGroup>
        <Link to={"kanban"}>看板</Link>
        <Link to={"topic"}>任务</Link>
      </LinkGroup>
      <div>
        <Routes>
          <Route path={"/kanban"} element={<Kanban></Kanban>}></Route>
          <Route path={"/topic"} element={<Topic></Topic>}></Route>
          <Navigate to={window.location.pathname + "/kanban"}></Navigate>
        </Routes>
      </div>
    </div>
  );
};

export default Product;

const LinkGroup = styled.div``;
