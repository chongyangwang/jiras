/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-10 14:04:39
 * @LastEditTime: 2021-08-10 14:31:01
 */
import { useEffect } from "react";
import { useHttp } from "./http";
import { ListItem } from "./interface";
import { useAsync } from "./use-async";
import { cleanObject } from "./utils";
export const useListItem = (param?: Partial<ListItem>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<ListItem[]>();
  // 表单项发生改变时获得资源
  useEffect(() => {
    run(client("list", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
