import './ChatBox.css'
import { useState } from 'react'

const ChatBox = () => {

    const [text, setText] = useState('')
    const [count, setCount] = useState(0)

    const handleInput = (event) => {
        setText(event.target.value)
        setCount(event.target.value.length)
    };

    return (
        <div className='chatBox'>
            <div className='chat'></div>
            <div className='inputBox' count={count}>
                <input 
                    id="input" 
                    type="text"
                    value={text}
                    placeholder="Digite algo aqui..."
                    onInput={handleInput}
                />
                <button 
                    id="button" 
                    type="button" 
                    className="sendBox"
                >
                        <span className="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    )
}

export default ChatBox