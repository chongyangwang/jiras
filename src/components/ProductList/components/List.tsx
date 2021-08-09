/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 14:14:26
 * @LastEditTime: 2021-08-09 10:27:01
 */
import { Table } from 'antd'
import React from 'react'
import { User } from 'utils/interface'

interface ListItem {
    id: string,
    name: string,
    userId: string,
    organization: string
}
interface Props {
    list: ListItem[],
    users: User[]
}

export default function List({ list, users }: Props) {
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            sorter: (a:any, b:any)=> a.name.localeCompare(b.name)
        },
        {
            title: '负责人',
            render(value: any, item: any){
                return <span>{users.find(user => user.id === item.userId)?.name}</span>
            }
        }
    ]
    return (
        <div>
            <Table pagination={false} columns={columns} dataSource={list}></Table>
        </div>
    )
}
