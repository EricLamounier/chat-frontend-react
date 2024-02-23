import './Login.css'
import { useState, useEffect, useRef } from 'react'
const Login = (props) => {

    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const refName = useRef(null)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setUser(user)
    }, [user]);

    const handleInput = (event) => {
        const textLength = event.target.value.length

        if (textLength>=12)
            return

        setName(event.target.value)
    }
    
    const handleLogin = (e) => {
        e.preventDefault()
        const nameLength = name.length
        if (nameLength < 3){
            setError('Necessário um mínimo de 3 caracteres!')
            refName.current.focus()
            refName.current.classList.add('is-danger')
            setTimeout(() => {
                refName.current.classList.remove('is-danger')
                setError('');
            }, 2000)
            return
        }

        const ws = props.onLogin()
        const config = cadUser()

        setIsVisible(false)
        props.setName(config.userName)
        props.setID(config.userID)
        ws.onopen = () => ws.send(JSON.stringify(config));
    }

    const cadUser = () => {
        const id = getRandomID();
        const configUser = {
            'userName': configName(),
            'userID': id,
            'message': id + ' - Conected sucessfully!',
            'messageType': 0, //configuration
        }
        localStorage.setItem('user', JSON.stringify(configUser))
        return configUser
    }

    const getRandomID = () => {
        let id = '0000' + Math.round(Math.random() * 9999)      
        return name.toLowerCase().replace(' ', '') + '#' + id.slice(id.length-4, id.length)
    }

    const configName = () => {
        const words = name.split(' ')
        const capitalyze = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        return capitalyze.join(' ')
    }
      
    return (
        <div id="login" style={{display: isVisible ? 'flex' : 'none'}}>
            <form 
                className="form card has-background-dark"
            >
                <p className="title">Entrar</p>
                <div className="formBox">
                    <input 
                        type="text" 
                        id="name"
                        className='input'
                        placeholder="Digite seu nome aqui"
                        value={name}
                        ref={refName}
                        onInput={handleInput}
                        autoComplete="off"
                        required 
                    />
                    <p className='help is-danger'>{error}</p>
                    <button 
                        type="submit" 
                        id="entrar"
                        className='button is-info'
                        onClick={handleLogin}
                    >Entrar</button>            
                </div>
            </form>
        </div>
    )
}

export default Login