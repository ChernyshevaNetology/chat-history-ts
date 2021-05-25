import React, { FC } from "react";
import "./css/main.css";
import { messages } from "data";
import MessageHistory from "components/messageHistory/MessageHistory";

const App: FC = () => (
  <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        <MessageHistory messages={messages} />
      </div>
    </div>
  </div>
);

export default App;
