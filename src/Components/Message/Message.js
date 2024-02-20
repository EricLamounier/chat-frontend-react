import './Message.css'

const Message = (props) => {
    return (
        
        <div className={`messageContainer ${props.image ? 'receive' : 'send'}`}>
            { // Imagem caso for mensagem recebida
                props.image ? 
                <div className='image'></div> : null
            }

            <div className='messageBox'>
                <span className='id inf'>id</span>
                <span className='message'>mmensagemmensagemmensagem</span>
                <span className='time inf'>11:11</span>
            </div>
        </div>

        
    )
}

export default Message

/*


<div className='messageContainer'>
            <div className='messageBox'>
                <span className='id'></span>
                <span className='message'></span>
                <span className='time'></span>
            </div>
        </div>



<!--
    <div class="messageBox">
        <div class="sendMessage message">
            <span class="myID ID">myid#1234</span>
            <span class="messageContent">oi</span>
            <span class="time">13:27</span>
        </div>
    </div>

    <div class="messageBox">
        <div class="receivedImage">SB</div>
        <div class="receivedMessage message">
            <span class="personID ID">xid#09876</span>
            <span class="messageContent">Lorem ipsun</span>
            <span class="time">13:29</span>
        </div>
    </div>
--> */