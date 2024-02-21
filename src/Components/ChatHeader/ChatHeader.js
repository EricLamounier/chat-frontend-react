import './ChatHeader.css'

const ChatHeader = (props) => {
    return (
        <div className='chatHeader nes-container is-rounded'>
            <div className='myInfo'>
                <span className='myName'>{props.name}</span>
                <span className='myID'>{props.id}</span>
            </div>
            <div className='myImage '>{props.image}</div>
        </div>
    )
}

export default ChatHeader