import './App.css';
import 'bulma/css/bulma.min.css';
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
  const [onlineUsers, setOnlineUsers] = useState([])

  useEffect(() => {

    const processData = ({data}) => {
      const _data = JSON.parse(data) 
      switch(_data.messageType){
        case 1: // Usuarios
          const filteredUsers = _data.users.filter(userId => userId !== id);
          setOnlineUsers(filteredUsers);
          break;

        case 2: // Mensagens
          const message = {
            'userID': _data.userID,
            'userName': _data.userName,
            'message': _data.message,
            'messageType': _data.userID === id ? 'send' : 'receive'
          };

          setMessages(prevMessages => [...prevMessages, message]);
          break;

          default:
            break;
      }
    }

    /*
    const processMessage = ({ data }) => {
      const _data = JSON.parse(data.message);
      //console.log(data)

      const message = {
        'userID': _data.userID,
        'userName': _data.userName,
        'message': _data.message,
        'messageType': _data.userID === id ? 'send' : 'receive'
      };

      if (_data.messageType === -1) return // Login      

      setMessages(prevMessages => [...prevMessages, message]);
    };*/

    if (websocket) websocket.onmessage = processData;

    // Adicionando o listener beforeunload
    const handleBeforeUnload = () => {
      if (websocket && id) {
        const logoutMessage = {
          messageType: 3, // Logout
          userID: id,
        };
        websocket.send(JSON.stringify(logoutMessage));
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Removendo o listener beforeunload quando o componente é desmontado
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
    
  }, [id, websocket]);

  const handleLogin = () => {
    const newWebSocket = new WebSocket('wss://cchat-backend-i2rk.onrender.com/');
    //const newWebSocket = new WebSocket('ws://localhost:3001');
    //const newWebSocket = new WebSocket('wss://partially-legible-ferret.ngrok-free.app/')
    setWebsocket(newWebSocket);
    return newWebSocket;
  };

  return (
    <div className="App ">
      <Login 
        onLogin={handleLogin} 
        setName={setName}
        setID={setID} 
      />
      <BarSide>
        {
          onlineUsers.map((user, index) => (<Person key={index} >{user}</Person>))
        }
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
