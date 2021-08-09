/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-04 11:09:19
 * @LastEditTime: 2021-08-05 14:35:36
 */
import React, {useState, useEffect} from 'react'
import List from './components/List'
import Form from './components/Form'
import * as qs from 'qs'
import { cleanObject, useMount, useDebounce } from 'utils/utils'
const baseUrl = process.env.REACT_APP_API_URL

export default function ProductList() {
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const [params, setParams] = useState({
        name: '',
        userId: ''
    })
    const debounceParams = useDebounce(params, 200)

    useMount(() => {
        fetch(`${baseUrl}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    });
    // 表单项发生改变时获得资源
    useEffect(() => {
        fetch(`${baseUrl}/list?${qs.stringify((cleanObject(debounceParams)))}`).then(async res => {
            if(res.ok){
               setList(await res.json())
            }
        })
    }, [debounceParams]);

    return (
        <div>
            <Form users={users} params={params} setParams={setParams}></Form>
            <List list={list} users={users}></List>
        </div>
    )
}
