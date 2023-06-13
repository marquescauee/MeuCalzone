import { useState } from 'react'
import './login.css'
import { useAutCtx } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const autCtx = useAutCtx()
    const navigate = useNavigate()

    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')

    const [credenciaisErradas, setCredenciaisErradas] = useState(false)

    const handleLogin =  async (e) => {
        e.preventDefault()

        let resultLogin = await autCtx.login(emailLogin, senhaLogin)

        if(resultLogin) {
            setCredenciaisErradas(true)
            return
        }

        navigate("/pedido")
    }

    return (
        <div className='divLogin d-flex'>
            <div className="row justify-content-center d-flex align-self-center ">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Login</div>

                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                <div className="row mb-5 d-block">
                                    <label htmlFor="email"
                                        className="lb-login col-md-4 col-form-label">Email:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="emailLogin" type="email"
                                            className="form-control" name="email"
                                            required  value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-5 d-block">
                                    <label htmlFor="password"
                                        className="lb-login col-md-4 col-form-label">Senha:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="passwordLogin" type="password"
                                            className="form-control" name="password"
                                            required  value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)} />
                                    </div>
                                </div>

                                {credenciaisErradas && <div className="mt-2 texto-erro">Login e/ou senha inválidos.</div>}

                                <div className="row mb-5">
                                    <button type="submit" onClick={handleLogin} className="m-auto w-50 my-4 d-block p-2 botaoEntrar">
                                        Entrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login