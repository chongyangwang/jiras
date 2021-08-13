/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-04 11:09:19
 * @LastEditTime: 2021-08-13 14:11:09
 */
import React from "react";
import List from "./components/List";
import FormComponent from "./components/Form";
import { useDebounce } from "utils/utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useListItem } from "../../utils/use-list-item";
import { useUsers } from "utils/use-user";
import { useDocumentTitle } from "../../utils/utils";
import { useProjectSearchParams } from "./util";

export default function ProductList() {
  useDocumentTitle("项目列表", false);
  // const [keys] = useState<('name'|'userId')[]>(['name', 'userId'])
  const [params, setParams] = useProjectSearchParams();
  const { isLoading, error, data: list } = useListItem(useDebounce(params));
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <FormComponent
        users={users || []}
        params={params}
        setParams={setParams}
      ></FormComponent>
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        users={users || []}
        loading={isLoading}
        dataSource={list || []}
      ></List>
    </Container>
  );
}

ProductList.whyDidYouRender = false;
const Container = styled.div`
  padding: 3.2rem;
`;
