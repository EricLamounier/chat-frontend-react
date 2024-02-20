import './Login.css'
import { useState } from 'react'

const Login = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    let websocket = null;

    const handleLogin = () => {
        const nameLength = name.length
        if (nameLength < 3){
            setError('Necessário tem um mínimo de 3 caracteres!')
            return
        }

        setIsVisible(false)
        websocket = new WebSocket('wss://cchat-backend-i2rk.onrender.com')
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