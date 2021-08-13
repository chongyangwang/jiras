/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-06 14:14:26
 * @LastEditTime: 2021-08-13 14:00:35
 */
import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/es/table";
import { ListItem, User } from "utils/interface";
import { Link } from "react-router-dom";

interface Props extends TableProps<ListItem> {
  users: User[];
}

export default function List({ users, ...props }: Props) {
  return (
    <div>
      <Table
        rowKey={(record) => record.id}
        pagination={false}
        {...props}
        columns={[
          {
            title: "名称",
            key: "name",
            render(value: any, item: any, index) {
              return <Link to={String(item.id)}>{item.name}</Link>;
            },
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
          },
          {
            title: "部门",
            key: "organization",
            dataIndex: "organization",
          },
          {
            title: "负责人",
            render(value: any, item: any, index) {
              return (
                <span>
                  {users.find((user) => user.id === item.userId)?.name ||
                    "未知"}
                </span>
              );
            },
          },
        ]}
      ></Table>
    </div>
  );
}
