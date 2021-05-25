import React, { FC } from "react";
import { MessageProps } from "types";

const Message: FC<MessageProps> = ({ name, text, time }) => (
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{name}</span>
      <i className="fa fa-circle me" />
    </div>
    <div className="message other-message float-right">{text}</div>
  </li>
);

export default Message;
