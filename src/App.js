import './App.css';
import BarSide from './Components/BarSide/BarSide';
import Person from './Components/Person/Person'
import ChatContainer from './Components/ChatContainer/ChatContainer';
import ChatHeader from './Components/ChatHeader/ChatHeader';
import ChatBox from './Components/ChatBox/ChatBox';
import Login from './Components/Login/Login';
import { useState } from 'react';

function App() {
  const [websocket, setWebsocket] = useState(null);

  const processTeste = ({data}) => {
    const _data = JSON.parse(data)
    console.log(data)
  }

  const handleLogin = () => {
    const newWebSocket = new WebSocket('wss://cchat-backend-i2rk.onrender.com');
    newWebSocket.onmessage = processTeste
    setWebsocket(newWebSocket);
    return newWebSocket
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin}/>
      <BarSide>
        <Person />
        <Person />
        <Person />
      </BarSide>
      <ChatContainer>
        <ChatHeader name='eric' id='eric#1234'/>
        <ChatBox websocket={websocket} />
      </ChatContainer>
    </div>
  );
}

export default App;
