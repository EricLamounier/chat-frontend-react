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
        <div className={`messageContainer ${props.messageType}`}>
            { // Imagem caso for mensagem recebida
                props.messageType === 'receive' ? 
                <div className='image card'>{props.id[0].toUpperCase()}</div> : null
            }

            <div className='messageBox card'>
                <span className='id inf'>{props.id}</span>
                <span className='msg'>{props.message}</span>
                <span className='time inf'>{time}</span>
            </div>
        </div>        
    )
}

export default Message