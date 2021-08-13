/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-03 14:21:06
 * @LastEditTime: 2021-08-10 18:34:20
 */
import { useAuth } from "context/auth-context";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import AuthEntiCatedApp from "views/AuthEntiCatedApp/AuthEntiCatedApp";
import UnAuthEntiCatedApp from "views/UnAuthEntiCatedApp/UnAuthEntiCatedApp";
import { FullPageErrorFallBack } from "components/lib";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FullPageErrorFallBack}>
        {user ? (
          <AuthEntiCatedApp key={"auth"}></AuthEntiCatedApp>
        ) : (
          <UnAuthEntiCatedApp key={"unauth"}></UnAuthEntiCatedApp>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
