import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { collection, addDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    const collectionRef = collection(db, "rooms", channelId, "messages");
    addDoc(collectionRef, {
      message: input,
      timestamp: Timestamp.now(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
    console.log(user?.photoURL);
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

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
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
