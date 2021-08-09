/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 13:48:37
 * @LastEditTime: 2021-08-06 14:11:09
 */

 import React, { useState } from 'react';
 import Login from './Login'
 import Register from './Register';

 
 const UnAuthEntiCatedApp = () => {
     const [isRegister, setRegister] = useState(false)
     return (
         <div>
            {
             isRegister ? <Register></Register> : <Login></Login>
            }
            <button onClick={()=>setRegister(!isRegister)}>去{isRegister ? '登录': '注册'}</button>
         </div>
     );
 }
 
 export default UnAuthEntiCatedApp;
 