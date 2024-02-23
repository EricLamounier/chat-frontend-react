import './ChatHeader.css'

const ChatHeader = (props) => {
    return (
        <div className='chatHeader card has-background-dark'>
            <div className='myInfo'>
                <span className='myName'>{props.name}</span>
                <span className='myID'>{props.id}</span>
            </div>
            <div className='myImage card '>{props.image}</div>
        </div>
    )
}

export default ChatHeader