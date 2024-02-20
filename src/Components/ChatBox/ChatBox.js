import './ChatBox.css'
import { useState, useRef } from 'react'
import Message from '../Message/Message'

const ChatBox = (props) => {

    const [text, setText] = useState('')
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(0) // 0-black | 1-orange | 2-red
    const inputRef = useRef(null);
    const maxCaracters = 15

    const handleInput = (event) => {
        const textLength = event.target.value.length

        setText(event.target.value)
        setCount(textLength)
        
        if(textLength > maxCaracters - 10 && textLength < maxCaracters)
            setColor('#c47f00') //orange
        else if(textLength >= maxCaracters)
            setColor('#8b3232') //red
        else
            setColor('white')
    };

    const handleSend = (event) => {
        event.preventDefault()

        if (count <= maxCaracters){
            //cria a mensagem no box
            console.log('add')
            setText('')
            inputRef.current.focus();
        }
    }

    return (
        <div className='chatBox'>
            <div className='chat'>
                <Message 
                    image={1}
                />
                <Message 
                    image={1}
                />
                <Message 
                    image={1}
                />
                <Message 
                    image={1}
                />
                
            </div>
            <div 
                className='inputBox' 
                count={count} 
                style={{'--color': color}}
            >
                <input 
                    id="input" 
                    type="text"
                    value={text}
                    placeholder="Digite algo aqui..."
                    ref={inputRef}
                    onInput={handleInput}
                />
                <button 
                    id="button" 
                    type="button" 
                    className="sendBox"
                    onClick={handleSend}
                >
                        <span className="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    )
}

export default ChatBox