/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-04 11:10:36
 * @LastEditTime: 2021-08-05 18:46:07
 */
import React from 'react'
import { User } from 'utils/interface'

interface Props {
    users: User[],
    params: {
      name: string;
      userId: string
    },
    setParams:(params: Props['params']) => void
}

export default function Form({users, params, setParams}: Props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="请输入" value={params.name} onChange={(e) => setParams({
                    ...params,
                    name: e.target.value
                })}/>
                <select onChange={e => setParams({
                    ...params,
                    userId: e.target.value
                })}>
                    <option value="">请选择</option>
                    {
                        users.map((item)=> {
                          return  <option value={item.id} key={item.id}>{item.name}</option>
                        })
                    }
                </select>
            </form>
        </div>
    )
}
