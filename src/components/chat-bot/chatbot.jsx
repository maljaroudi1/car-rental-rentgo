import './chatbot.css'
import Chatbot from "react-chatbot-kit";

import 'react-chatbot-kit/build/main.css';

import config from './config';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default MyComponent;