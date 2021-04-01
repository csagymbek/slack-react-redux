import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components";
import { Chat } from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Login } from "./components/Login";
import Spinner from "react-spinkit";

export const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header user={user} />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
};

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
