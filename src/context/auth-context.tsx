/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-06 10:29:42
 * @LastEditTime: 2021-08-12 10:31:55
 */

import * as auth from "providers/auth-provider";
import React from "react";
import { AuthForm, User } from "utils/interface";
import { http } from "utils/http";
import { ReactNode } from "react";
import { useMount } from "utils/utils";
import { useAsync } from "utils/use-async";
import { FullPageErrorFallBack, FullPageLoading } from "components/lib";

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

//创建一个全局的上下文
const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

// 创建一个函数组件 返回全局的上下文
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<User| null>(null)
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  useMount(() => {
    run(bootstrapUser());
  });
  if (isIdle || isLoading) {
    return <FullPageLoading></FullPageLoading>;
  }
  if (isError) {
    return <FullPageErrorFallBack error={error}></FullPageErrorFallBack>;
  }
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在中AuthContext使用");
  }
  return context;
};

// Provider  Context  App  useContext
// Context 是一个全局的上下文对象 可以跨层级传递状态
// Provider 作为一个介于组件与Context之间的对象 可以将上下文返回出去 并注册在组件上
// ReactHooks 需要通过useContext的钩子去访问状态  useContext函数需要将要使用的Context上下文包裹起来
