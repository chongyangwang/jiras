/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-05 18:45:10
 * @LastEditTime: 2021-08-13 11:23:48
 */

export interface User {
  id: number;
  name: string;
  token: string;
}

export interface AuthForm {
  password: string;
  username: string;
}

export interface ListItem {
  id: number;
  name: string;
  userId: number;
  organization: string;
}
