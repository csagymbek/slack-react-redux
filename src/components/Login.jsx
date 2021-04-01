import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

export const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((er) => console.log(er.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt="" />
        <h1>Sign In</h1>
        <p>www.slack.com</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginInnerContainer = styled.div`
  padding: 120px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > h1 {
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 80px;
  }
  > button {
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    font-weight: 900;
    padding: 10px 15px;
  }
`;
