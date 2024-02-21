import './Message.css'
import { useEffect, useState } from 'react'

const Message = (props) => {

    const getTime = () => {
        const date = new Date()
        return date.getHours() + ':' + date.getMinutes()
    }

    const [time, setTime] = useState('')

    useEffect(() => {
        setTime(getTime())
    }, [])

    return (        
        <div className={`messageContainer ${props.messageType ? 'receive' : 'send'}`}>
            { // Imagem caso for mensagem recebida
                props.image ? 
                <div className='image'></div> : null
            }

            <div className='messageBox nes-container is-rounded'>
                <span className='id inf'>{props.id}</span>
                <span className='message'>{props.message}</span>
                <span className='time inf'>{time}</span>
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