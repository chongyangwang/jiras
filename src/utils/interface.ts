/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-05 18:45:10
 * @LastEditTime: 2021-08-06 10:33:58
 */

export interface User {
    id: string,
    name: string,
    token: string
}

export interface AuthForm {
    password: string,
    username: string
}