import './Person.css'

const Person = (props) => {

    return (
        <a className='person nes-btn is-rounded is-primary'
        >
            {props.children}
        </a>
    )
}

export default Person