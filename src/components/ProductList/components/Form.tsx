import React from "react";
import { ListItem, User } from "utils/interface";
import { Form, Input } from "antd";
import { UserSelect } from "components/user-select";

interface Props {
  users: User[];
  params: Partial<Pick<ListItem, "name" | "userId">>;
  setParams: (params: Props["params"]) => void;
}

export default function FormComponent({ users, params, setParams }: Props) {
  return (
    <div>
      <Form layout={"inline"} style={{ marginBottom: "2rem" }}>
        <Form.Item>
          <Input
            type="text"
            placeholder="请输入项目名"
            value={params.name}
            onChange={(e) => setParams({ ...params, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <UserSelect
            defaultOptionName={"负责人"}
            value={params.userId}
            onChange={(value) => setParams({ ...params, userId: value })}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
