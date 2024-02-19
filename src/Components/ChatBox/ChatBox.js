import './ChatBox.css'

const ChatBox = () => {
    return (
        <div className='chatBox'>
            <div className='chat'></div>
            <div className='inputBox'>
                <input id="input" type="text" placeholder="Digite algo aqui..."/>
                <button id="button" type="button" class="sendBox">
                        <span class="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    )
}

export default ChatBox