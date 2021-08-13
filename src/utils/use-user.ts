/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-10 14:14:06
 * @LastEditTime: 2021-08-10 14:36:40
 */

import { useHttp } from "./http";
import { User } from "./interface";
import { useAsync } from "./use-async";
import { cleanObject } from "./utils";
import { useEffect } from "react";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
