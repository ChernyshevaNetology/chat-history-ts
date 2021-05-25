import React, { FC } from "react";
import Message from "../messageItems/Message";
import Response from "../messageItems/Response";
import Typing from "../messageItems/Typing";

interface SenderProps {
  [key: string]: string;
}

interface MessageHistoryProps {
  id: string;
  from: SenderProps;
  type: string;
  time: string;
  text?: any;
}

interface MessageProps {
  messages: MessageHistoryProps[];
}

const MessageHistory: FC<MessageProps> = ({ messages }) => {
  if (!messages.length) {
    return null;
  }
  return (
    <ul>
      {messages.map(
        ({ id, from: { name }, type, time, text }: MessageHistoryProps) => {
          return type === "message" ? (
            <Message key={id} name={name} time={time} text={text} />
          ) : type === "response" ? (
            <Response key={id} name={name} time={time} text={text} />
          ) : (
            <Typing key={id} />
          );
        }
      )}
    </ul>
  );
};

export default MessageHistory;
