/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-05 18:36:57
 * @LastEditTime: 2021-08-06 11:32:28
 */

// auth-provider.js

import { User, AuthForm } from 'utils/interface'

const baseUrl = process.env.REACT_APP_API_URL

const localStorageKey = '__auth_provider_token__'


export const getToken = () =>window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user} : {user:User}) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

export const login = (data: AuthForm) =>{
 return fetch(`${baseUrl}/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  }).then(async res => {
    if (res.ok) {
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject(res)
    }
  })
}

export const register = (data: AuthForm) =>{
  return fetch(`${baseUrl}/register`, {
     method: 'post',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   }).then(async res => {
      if (res.ok) {
       return handleUserResponse(await res.json())
      } else {
       return Promise.reject(res)
      }
   })
 }

 export const logout = async () => window.localStorage.removeItem(localStorageKey)