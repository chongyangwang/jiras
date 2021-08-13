/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-13 11:35:57
 * @LastEditTime: 2021-08-13 14:00:51
 */

import { useUrlQueryParam } from "utils/use-search-params";

export const useProjectSearchParams = () => {
  const [params, setParams] = useUrlQueryParam(["name", "userId"]);
  const projectsParam = {
    ...params,
    userId: Number(params.userId) || undefined,
  };
  return [projectsParam, setParams] as const;
};
