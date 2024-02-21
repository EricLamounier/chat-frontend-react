import './App.css';
import BarSide from './Components/BarSide/BarSide';
import Person from './Components/Person/Person'
import ChatContainer from './Components/ChatContainer/ChatContainer';
import ChatHeader from './Components/ChatHeader/ChatHeader';
import ChatBox from './Components/ChatBox/ChatBox';
import Login from './Components/Login/Login';
import { useState, useEffect } from 'react';

function App() {
  const [websocket, setWebsocket] = useState(null);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const processMessage = ({ data }) => {
      const _data = JSON.parse(data);

      const message = {
        'userID': _data.userID,
        'userName': _data.userName,
        'message': _data.message,
        'messageType': _data.userID === id ? 0 : 1
      };

      console.log(_data.userID === id ? 0 : 1)

      if (_data.messageType === -1) return // Login      

      setMessages(prevMessages => [...prevMessages, message]);
    };

    if (websocket) websocket.onmessage = processMessage;
    
  }, [id, websocket]);

  const handleLogin = () => {
    const newWebSocket = new WebSocket('wss://cchat-backend-i2rk.onrender.com');
    setWebsocket(newWebSocket);
    return newWebSocket;
  };

  return (
    <div className="App">
      <Login 
        onLogin={handleLogin} 
        setName={setName}
        setID={setID} 
      />
      <BarSide>
        <Person />
        <Person />
        <Person />
      </BarSide>
      <ChatContainer>
        <ChatHeader 
          name={name}
          id={id}
          />
        <ChatBox 
          websocket={websocket}
          messages={messages}
        />
      </ChatContainer>
    </div>
  );
}

export default App;
