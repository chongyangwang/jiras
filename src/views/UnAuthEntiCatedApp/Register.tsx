/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 13:51:26
 * @LastEditTime: 2021-08-09 10:05:06
*/
 
import React from 'react';
import { useAuth } from 'context/auth-context';
import { Button, Form, Input } from 'antd';

const Register = () => {
	const { register } = useAuth()
	const handleSubmit = (values: {username: string, password: string}) => {
		register(values)
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
			   <Button type={"primary"} htmlType={'submit'}>注册</Button> 
			</Form.Item>
		</Form>
	);
}

export default Register;
