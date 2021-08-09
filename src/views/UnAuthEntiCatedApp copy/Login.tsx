/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-05 16:55:43
 * @LastEditTime: 2021-08-06 14:26:07
 */

import React, { FormEvent } from 'react';
import { useAuth } from 'context/auth-context';

const Login = () => {
	const { login } = useAuth()
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value
		const password = (event.currentTarget.elements[1] as HTMLInputElement).value
		login({username, password})
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">用户名</label>
				<input type="text" id={'username'} />
			</div>
			<div>
				<label htmlFor="password">密码</label>
				<input type="text" id={'password'} />
			</div>
			<button type={"submit"}>登录</button>
		</form>
	);
}

export default Login;
