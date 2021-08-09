/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-03 14:21:06
 * @LastEditTime: 2021-08-06 14:25:26
 */
import { useAuth } from 'context/auth-context';
import React from 'react';
import AuthEntiCatedApp from 'views/AuthEntiCatedApp/AuthEntiCatedApp';
import UnAuthEntiCatedApp from 'views/UnAuthEntiCatedApp/UnAuthEntiCatedApp'
import './App.css';

function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {
        user ? <AuthEntiCatedApp></AuthEntiCatedApp> : <UnAuthEntiCatedApp></UnAuthEntiCatedApp>
      }
    </div>
  );
}

export default App;
