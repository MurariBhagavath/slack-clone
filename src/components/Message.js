import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Message({ message, id, timestamp, user, userImage }) {
    return <MessageContainer>
        <Avatar src={userImage} sizes={28} />
        <MessageInfo>
            <h4>
                {user}{' '}
                <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>;
}

export default Message;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    >img{
        height: 50px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;

    >h4 >span{
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;