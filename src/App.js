import './App.css';
import BarSide from './Components/BarSide/BarSide';
import Person from './Components/Person/Person'
import ChatContainer from './Components/ChatContainer/ChatContainer';
import ChatHeader from './Components/ChatHeader/ChatHeader'
import ChatBox from './Components/ChatBox/ChatBox';

function App() {
  return (
    <div className="App">
      <BarSide>
        <Person />
        <Person />
        <Person />
      </BarSide>
      <ChatContainer>
        <ChatHeader name='eric'/>
        <ChatBox />
      </ChatContainer>
    </div>
  );
}

export default App;
