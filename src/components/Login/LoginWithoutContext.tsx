/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-05 16:55:43
 * @LastEditTime: 2021-08-05 18:36:10
 */

import React, { FormEvent } from 'react';
const baseUrl = process.env.REACT_APP_API_URL


const Login = () => {
	interface D {
		username: string,
		password: string
	}
	const login = (data: D) => {
		fetch(`${baseUrl}/login`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)

		}).then(async res => {
			if (res.ok) {
				console.log(res)
			}
		})
	}
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		//   console.log(event.currentTarget.elements[0] as HTMLInputElement)
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value
		//   console.log(username)
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
