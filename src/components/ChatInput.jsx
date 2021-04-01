import { Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) return false;
    if (!input) return false;
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    chatRef.current.scrollIntoView({ behavior: "smooth" });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          placeholder={`Message # ${channelName ? channelName : ""}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage} hidden>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #333;
    outline: none;
    font-size: 18px;
    padding: 20px 20px 10px 10px;
  }
  > form > button {
    display: none !important;
  }
`;
