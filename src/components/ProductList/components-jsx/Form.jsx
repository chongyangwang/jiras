import React from 'react'

export default function Form({users, params, setParams}) {
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
                        users.map((item, index)=> {
                          return  <option value={item.id} key={item.id}>{item.name}</option>
                        })
                    }
                </select>
            </form>
        </div>
    )
}
