/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 11:08:37
 * @LastEditTime: 2021-08-06 11:53:03
 */

import React, { ReactNode } from 'react'
import { AuthProvider } from 'context/auth-context'
export const AppProviders = ({children}: {children: ReactNode}) => {
  return <AuthProvider>{children}</AuthProvider>
}