/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 13:48:37
 * @LastEditTime: 2021-08-09 10:09:57
 */


 import React, { useState } from 'react';
 import { Button, Card } from 'antd';
 import Login from './Login'
 import Register from './Register';

 
 const UnAuthEntiCatedApp = () => {
     const [isRegister, setRegister] = useState(false)
     return (
        <div style={{'display':'flex', 'justifyContent':'center'}}>
            <Card>
                {
                isRegister ? <Register></Register> : <Login></Login>
                }
                <Button type="primary" onClick={()=>setRegister(!isRegister)}>去{isRegister ? '登录': '注册'}</Button>
            </Card>
         </div>
     );
 }
 
 export default UnAuthEntiCatedApp;
 