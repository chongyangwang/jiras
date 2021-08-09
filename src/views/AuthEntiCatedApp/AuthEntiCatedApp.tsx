/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-06 14:12:52
 * @LastEditTime: 2021-08-06 14:27:45
 */
import React from 'react';
import ProductList from '../../components/ProductList/index';
import { useAuth } from 'context/auth-context';
const AuthEntiCatedApp = () => {
    const { logout } = useAuth()
    return (
        <div>
            <button onClick={()=> logout()}>登出</button>
            <ProductList></ProductList>
        </div>
    );
}

export default AuthEntiCatedApp;
