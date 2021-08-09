/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-04 11:09:19
 * @LastEditTime: 2021-08-09 11:15:34
 */
import React, {useState, useEffect} from 'react'
import List from './components/List'
import Forms from './components/Form'
import { cleanObject, useMount, useDebounce } from 'utils/utils'
import { useHttp } from 'utils/http'

export default function ProductList() {
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const [params, setParams] = useState({
        name: '',
        userId: ''
    })
    const debounceParams = useDebounce(params, 200)
    const client = useHttp()
    useMount(() => {
        client('users').then(setUsers)
    });
    // 表单项发生改变时获得资源
    useEffect(() => {
        client('list', {data: cleanObject(debounceParams)}).then(setList)
    }, [debounceParams]);

    return (
        <div>
            <Forms users={users} params={params} setParams={setParams}></Forms>
            <List list={list} users={users}></List>
        </div>
    )
}
