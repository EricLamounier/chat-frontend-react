import './Login.css'
import { useState, useEffect } from 'react'

const Login = (props) => {

    const [name, setName] = useState('123')
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isVisible, setIsVisible] = useState(true)

    const handleLogin = () => {
        const nameLength = name.length
        if (nameLength < 3){
            setError('Necessário tem um mínimo de 3 caracteres!')
            return
        }

        const ws = props.onLogin()

        if(localStorage.getItem('user') != null){ 
                const x = JSON.parse(localStorage.getItem('user'))
                setUser(x)
        }

        setIsVisible(false)

        ws.onopen = () => ws.send(JSON.stringify({ 'id': -1, 'message': 'Um usuário acabou de se conectar' }));
    }

    useEffect(() => {
        setUser(user)
        
    }, [user]);

    const cadUser = () => {
        const configUser = {
            'userName': configName(),
            'userID': getRandomID(),
            'message': '',
            'messageType': -1, //configuration
        }
        localStorage.setItem('user', JSON.stringify(configUser))
        return configUser
    }

    const getRandomID = () => {
        let id = '0000' + Math.round(Math.random() * 9999)
        const stringLength = id.length
      
        id = name.toLowerCase() + '#' + id.slice(id.length-4, id.length)
        return id
    }

    const configName = () => {
        const words = name.split(' ')
        const capitalyze = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return capitalyze.join(' ')
    }
      

    return (
        <div id="login" style={{display: isVisible ? 'flex' : 'none'}}>
            <div className="form">
                <div className="formBox">
                    <label>Entrar</label>
                    <input 
                        id="cadUser" 
                        type="text" 
                        placeholder="Digite seu nome aqui" 
                        value={name}
                        onInput={(e)=>{setName(e.target.value)}}
                        required/>
                    <span id="errorMessage">{error}</span>
                    <button 
                        id="entrar"
                        onClick={handleLogin}
                    >Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login