/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 13:51:26
 * @LastEditTime: 2021-08-06 13:58:02
*/
 
import React, { FormEvent } from 'react';
import { useAuth } from 'context/auth-context';

const Register = () => {
	const { register, user } = useAuth()
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value
		const password = (event.currentTarget.elements[1] as HTMLInputElement).value
		register({username, password})
	}
	return (
		<form onSubmit={handleSubmit}>
			{
				user ? <div> 登录成功 用户名: {user?.name}</div> : null
			}
			<div>
				<label htmlFor="username">用户名</label>
				<input type="text" id={'username'} />
			</div>
			<div>
				<label htmlFor="password">密码</label>
				<input type="text" id={'password'} />
			</div>
			<button type={"submit"}>注册</button>
		</form>
	);
}

export default Register;
