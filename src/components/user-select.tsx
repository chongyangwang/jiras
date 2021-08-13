/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-13 11:46:27
 * @LastEditTime: 2021-08-13 13:51:49
 */

import React from "react";
import IdSelect from "./id-select";
import { useUsers } from "../utils/use-user";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: users } = useUsers();
  return <IdSelect options={users || []} {...props}></IdSelect>;
};
