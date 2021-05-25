import React, { FC } from "react";
import { MessageProps } from "types";

const Response: FC<MessageProps> = ({ name, text, time }) => (
  <li>
    <div className="message-data">
      <span className="message-data-name">
        <i className="fa fa-circle online" />
        {name}
      </span>
      <span className="message-data-time">{time}</span>
    </div>
    <div className="message my-message">{text}</div>
  </li>
);

export default Response;
