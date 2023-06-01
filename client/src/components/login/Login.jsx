import './login.css'

const Login = () => {
    return (
        <div className='divLogin'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Login</div>

                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                <div className="row mb-5 d-block">
                                    <label for="email"
                                        className="lb-login col-md-4 col-form-label">Email:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="email" type="email"
                                            className="form-control" name="email"
                                            required autocomplete="email" autofocus />
                                    </div>
                                </div>

                                <div className="row mb-5 d-block">
                                    <label for="password"
                                        className="lb-login col-md-4 col-form-label">Senha:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="password" type="password"
                                            className="form-control" name="password"
                                            required autocomplete="current-password" />                              
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    {/* <div className="col-md-8 offset-md-4 m-auto div-rec">
                                        <a className="rec-senha" href="">
                                            Esqueceu a senha? Recupere aqui
                                        </a>
                                    </div> */}

                                    <button type="submit" className="m-auto w-50 my-4 d-block p-2 botaoEntrar">
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