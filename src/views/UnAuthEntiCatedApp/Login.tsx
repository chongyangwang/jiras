/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-05 16:55:43
 * @LastEditTime: 2021-08-09 10:05:12
 */

import React from 'react';
import { useAuth } from 'context/auth-context';
import {Button, Form, Input} from 'antd'

const Login = () => {
	const { login } = useAuth()
	const handleSubmit = (values: {username: string, password: string}) => {
		login(values)
	}
	return (
		<Form onFinish={handleSubmit}>
			<Form.Item name={'username'} rules={[{required:true, message:'请输入用户名'}]}>
				<Input type="text" id={'username'} placeholder={'用户名'}/>
			</Form.Item>
			<Form.Item name={'password'} rules={[{required:true, message:'请输入密码'}]}>
				<Input type="password" id={'password'} placeholder={'密码'}/>
			</Form.Item>
			<Form.Item>
			   <Button type={"primary"} htmlType={'submit'}>登录</Button> 
			</Form.Item>
		</Form>
	);
}

export default Login;
