import './register.css'

const Register = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Cadastre-se</div>

                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                <div className="row mb-5 d-block">
                                    <label for="nome"
                                        className="lb-login col-md-4 col-form-label">Nome:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="nome" type="text"
                                            className="form-control" name="nome"
                                            required />
                                    </div>
                                </div>
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
                                    <label for="cpf"
                                        className="lb-login col-md-4 col-form-label">CPF:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cpf" type="text"
                                            className="form-control" name="cpf"
                                            required />
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

                                <div className="row ">
                                    <button type="submit" className="m-auto w-50 d-block btn-login p-2 botaoEntrar">
                                        Cadastrar
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

export default Register