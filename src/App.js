import './App.css';
import "nes.css/css/nes.min.css";
import BarSide from './Components/BarSide/BarSide';
import Person from './Components/Person/Person'
import ChatContainer from './Components/ChatContainer/ChatContainer';
import ChatHeader from './Components/ChatHeader/ChatHeader';
import ChatBox from './Components/ChatBox/ChatBox';
import Login from './Components/Login/Login';
import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

function App() {
  const [websocket, setWebsocket] = useState(null);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  const [messages, setMessages] = useState([]);
  const [startChatPrivate, setStartChatPrivate] = useState(false)
  const draggableRef = useRef(null);

  useEffect(() => {
    const processMessage = ({ data }) => {
      const _data = JSON.parse(data);

      const message = {
        'userID': _data.userID,
        'userName': _data.userName,
        'message': _data.message,
        'messageType': _data.userID === id ? 'send' : 'receive'
      };

      console.log(_data.userID === id ? 0 : 1)

      if (_data.messageType === -1) return // Login      

      setMessages(prevMessages => [...prevMessages, message]);
    };

    if (websocket) websocket.onmessage = processMessage;
    
  }, [id, websocket]);

  const handleLogin = () => {
    const newWebSocket = new WebSocket('wss://partially-legible-ferret.ngrok-free.app');
    setWebsocket(newWebSocket);
    return newWebSocket;
  };

  const startChat = () => {
    console.log('oi')
    setStartChatPrivate(true)
  }

  return (
    <div className="App">
      <Login 
        onLogin={handleLogin} 
        setName={setName}
        setID={setID} 
      />
      <BarSide>
        <Person startChat={startChat}/>
        <Person />
        <Person />
      </BarSide>
      {startChatPrivate && (
        <Draggable nodeRef={draggableRef}>
          <div ref={draggableRef} style={{ position: 'absolute', top: '20%', left: '20%', zIndex: 2 }}>
            TESTE 123 TESTE 123
            <button className='nes-btn is-warning' onClick={()=>setStartChatPrivate(false)}>Sair</button>
          </div>
        </Draggable>
      )}
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
