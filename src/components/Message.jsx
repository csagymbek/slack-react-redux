import styled from "styled-components";

export const Message = ({ message, user, userImage, timestamp }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 8px;
    font-size: 12px;
  }
`;
