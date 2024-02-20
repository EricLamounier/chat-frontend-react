import './App.css';
import BarSide from './Components/BarSide/BarSide';
import Person from './Components/Person/Person'
import ChatContainer from './Components/ChatContainer/ChatContainer';
import ChatHeader from './Components/ChatHeader/ChatHeader';
import ChatBox from './Components/ChatBox/ChatBox';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <BarSide>
        <Person />
        <Person />
        <Person />
      </BarSide>
      <ChatContainer>
        <ChatHeader name='eric' id='eric#1234'/>
        <ChatBox />
      </ChatContainer>
    </div>
  );
}

export default App;
