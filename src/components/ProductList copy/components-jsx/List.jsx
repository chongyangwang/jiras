import React from 'react'

export default function List({list, users}) {
    return (
        <div>
           <table>
               <thead>
                   <tr>
                    <th>项目名称</th>
                    <th>负责人</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       list.map((item)=>{
                           return  <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{ users.find(user => user.id === item.userId)?.name}</td>
                                 </tr>
                       })
                   }
               </tbody>
           </table>
        </div>
    )
}
