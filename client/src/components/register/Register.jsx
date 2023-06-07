import { useState } from 'react'
import './register.css'

const Register = () => {

    const [nomeCadastro, setNomeCadastro] = useState('')
    const [emailCadastro, setEmailCadastro] = useState('')
    const [cpfCadastro, setCpfCadastro] = useState('')
    const [ruaCadastro, setRuaCadastro] = useState('')
    const [numero, setNumeroCadastro] = useState('')
    const [bairroCadastro, setBairroCadastro] = useState('')
    const [cidadeCadastro, setCidadeCadastro] = useState('')
    const [senhaCadastro, setSenhaCadastro] = useState('')

    const handleRegister = () => {
        //TODO
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Cadastre-se</div>

                        <div className="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                <div className="row mb-2 d-block">
                                    <label htmlFor="nome"
                                        className="lb-login col-md-4 col-form-label">Nome:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="nome" type="text"
                                            className="form-control" name="nome"
                                            required value={nomeCadastro} onChange={e => setNomeCadastro(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="email"
                                        className="lb-login col-md-4 col-form-label">Email:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="email" type="email"
                                            className="form-control" name="email"
                                            required  value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="cpf"
                                        className="lb-login col-md-4 col-form-label">CPF:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cpf" type="text"
                                            className="form-control" name="cpf"
                                            required value={cpfCadastro} onChange={e => setCpfCadastro(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mb-2 d-block">
                                    <label htmlFor="rua"
                                        className="lb-login col-md-4 col-form-label">Rua:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="rua" type="text"
                                            className="form-control" name="rua"
                                            required value={ruaCadastro} onChange={e => setRuaCadastro(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mb-2 d-flex">
                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="numero"
                                            className="lb-login col-md-4 col-form-label margemEsquerda">Número:</label>

                                        <div className="col-md-3 d-flex margemEsquerda w-50">
                                            <input id="numero" type="number" min="0"
                                                className="form-control" name="numero"
                                                required value={numero} onChange={e => setNumeroCadastro(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="bairro"
                                            className="lb-login col-md-4 col-form-label">Bairro:</label>

                                        <div className="col-md-4 d-flex w-80">
                                            <input id="bairro" type="text"
                                                className="form-control" name="bairro"
                                                required value={bairroCadastro} onChange={e => setBairroCadastro(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-2 d-block">
                                    <label htmlFor="cidade"
                                        className="lb-login col-md-4 col-form-label">Cidade:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cidade" type="text"
                                            className="form-control" name="cidade"
                                            required value={cidadeCadastro} onChange={e => setCidadeCadastro(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mb-4 d-block">
                                    <label htmlFor="password"
                                        className="lb-login col-md-4 col-form-label">Senha:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="password" type="password"
                                            className="form-control" name="password"
                                            required value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="row ">
                                    <button onClick={handleRegister} type="submit" className="m-auto w-50 d-block btn-login p-2 botaoEntrar">
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