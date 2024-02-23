import './Person.css'

const Person = (props) => {

    return (
        <button className='person button is-dark'
        >
            {props.children}
        </button>
    )
}

export default Person