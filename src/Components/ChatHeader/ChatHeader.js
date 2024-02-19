import './ChatHeader.css'

const ChatHeader = (props) => {
    return (
        <div className='chatHeader'>
            <div className='myInfo'>
                <span className='myName'>{props.name}</span>
                <span className='myID'>{props.id}</span>
                <div className='myImage'>{props.image}</div>
            </div>
        </div>
    )
}

export default ChatHeader