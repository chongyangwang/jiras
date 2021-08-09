/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-04 11:10:36
 * @LastEditTime: 2021-08-09 11:32:58
 */
import React from 'react'
import { User } from 'utils/interface'
import { Form, Input, Select } from 'antd'

interface Props {
    users: User[],
    params: {
      name: string;
      userId: string
    },
    setParams:(params: Props['params']) => void
}

export default function Forms({users, params, setParams}: Props) {
    return (
        <div>
            <Form>
                <Input 
                    type="text" 
                    placeholder="请输入" 
                    value={params.name} 
                    onChange={(value?) => console.log(value)}/>
                <Select onChange={value => setParams({...params, userId: value || ''})}>
                    <Select.Option value="">请选择</Select.Option>
                    {
                        users.map((item)=> {
                          return  <Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>
                        })
                    }
                </Select>
            </Form>
        </div>
    )
}
