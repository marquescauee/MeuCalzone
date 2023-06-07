import { useState } from 'react'
import './login.css'

const Login = () => {

    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        const credenciais = {
            "email": "ccccccccc@gmail.com",
            "senha": "cauezera"
        }

        try {
            const response = await fetch(`http://localhost:8080/api/pessoas/autenticar`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(credenciais)
            });

            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
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

                                <div className="row mb-5">
                                    <button onClick={handleLogin} type="submit" className="m-auto w-50 my-4 d-block p-2 botaoEntrar">
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