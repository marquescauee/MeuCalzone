import { useState } from 'react'
import './register.css'
import { useAutCtx } from '../../context/AuthContext'

const Register = ({setSucesso}) => {
   
    const autCtx = useAutCtx()

    const [nomeCadastro, setNomeCadastro] = useState('')
    const [emailCadastro, setEmailCadastro] = useState('')
    const [cpfCadastro, setCpfCadastro] = useState('')
    const [ruaCadastro, setRuaCadastro] = useState('')
    const [numero, setNumeroCadastro] = useState('')
    const [bairroCadastro, setBairroCadastro] = useState('')
    const [cidadeCadastro, setCidadeCadastro] = useState('')
    const [senhaCadastro, setSenhaCadastro] = useState('')

    const [nomeVazio, setNomeVazio] = useState(false)
    const [emailVazio, setEmailVazio] = useState(false)
    const [cpfVazio, setCpfVazio] = useState(false)
    const [senhaVazia, setSenhaVazia] = useState(false)
    const [ruaVazia, setRuaVazia] = useState(false)
    const [numeroVazio, setNumeroVazio] = useState(false)
    const [bairroVazio, setBairroVazio] = useState(false)
    const [cidadeVazia, setCidadeVazia] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        resetErros()

        if (!nomeCadastro.trim() || nomeCadastro.length < 3)
            setNomeVazio(true)

        if (!emailCadastro.trim())
            setEmailVazio(true)

        if (cpfCadastro.length !== 11)
            setCpfVazio(true)

        if (!ruaCadastro.trim())
            setRuaVazia(true)

        if (!numero)
            setNumeroVazio(true)

        if (!bairroCadastro.trim())
            setBairroVazio(true)

        if (!cidadeCadastro.trim())
            setCidadeVazia(true)

        if (!senhaCadastro.trim() || senhaCadastro.length < 8) {
            setSenhaVazia(true)
        }

        if (!nomeCadastro.trim() || nomeCadastro.length < 3 || !emailCadastro.trim() || cpfCadastro.length !== 11 || !ruaCadastro.trim() || !numero || !bairroCadastro.trim() || !cidadeCadastro.trim() || !senhaCadastro.trim() || senhaCadastro.length < 8) {
            return
        }

        const data = {
            "nome": nomeCadastro,
            "email": emailCadastro,
            "senha": senhaCadastro,
            "cpf": cpfCadastro,
            "tipo": "c",
            "endereco": {
                "rua": ruaCadastro,
                "numero": numero,
                "bairro": bairroCadastro,
                "cidade": cidadeCadastro
            }
        }

        try {
            const response = await fetch('http://localhost:8080/api/pessoas', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            resetEstados()
            setSucesso('Cadastro bem sucedido! Agora é só fazer login!')
            autCtx.atualizarRegistros()
            return response.json()

        } catch (err) {
            console.log(err)
        }
    }

    const resetEstados = () => {
        setNomeCadastro('')
        setEmailCadastro('')
        setCpfCadastro('')
        setRuaCadastro('')
        setNumeroCadastro(0)
        setBairroCadastro('')
        setCidadeCadastro('')
        setSenhaCadastro('')
        setNomeVazio(false)
        setEmailVazio(false)
        setCpfVazio(false)
        setSenhaVazia(false)
        setRuaVazia(false)
        setNumeroVazio(false)
        setBairroVazio(false)
        setCidadeVazia(false)
        setSucesso(false)
    }

    const resetErros = () => {
        setNomeVazio(false)
        setEmailVazio(false)
        setCpfVazio(false)
        setSenhaVazia(false)
        setRuaVazia(false)
        setNumeroVazio(false)
        setBairroVazio(false)
        setCidadeVazia(false)
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="cabeca-card mt-5 display-5">Cadastre-se</div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="nome"
                                        className="lb-login col-md-4 col-form-label">Nome:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="nome" type="text"
                                            className="form-control" name="nome"
                                            required value={nomeCadastro} onChange={e => setNomeCadastro(e.target.value)} />

                                        {nomeVazio && <div className="mt-2 texto-erro">Nome inválido. Por favor, tente novamente.</div>}

                                    </div>
                                </div>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="email"
                                        className="lb-login col-md-4 col-form-label">Email:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="email" type="email"
                                            className="form-control" name="email"
                                            required value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)} />

                                        {emailVazio && <div className="mt-2 texto-erro">Email inválido. Por favor, tente novamente.</div>}
                                    </div>
                                </div>
                                <div className="row mb-2 d-block">
                                    <label htmlFor="cpf"
                                        className="lb-login col-md-4 col-form-label">CPF:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cpf" type="text"
                                            className="form-control" name="cpf"
                                            required value={cpfCadastro} onChange={e => setCpfCadastro(e.target.value)} />

                                        {cpfVazio && <div className="mt-2 texto-erro">CPF inválido. Por favor, tente novamente.</div>}
                                    </div>
                                </div>

                                <div className="row mb-2 d-block">
                                    <label htmlFor="rua"
                                        className="lb-login col-md-4 col-form-label">Rua:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="rua" type="text"
                                            className="form-control" name="rua"
                                            required value={ruaCadastro} onChange={e => setRuaCadastro(e.target.value)} />


                                        {ruaVazia && <div className="mt-2 texto-erro">Rua inválida. Por favor, tente novamente.</div>}
                                    </div>
                                </div>

                                <div className="row mb-2 d-flex">
                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="numero"
                                            className="lb-login col-md-4 col-form-label margemEsquerda">Número:</label>

                                        <div className="col-md-3 d-flex margemEsquerda w-50">
                                            <input id="numero" type="number" min="0"
                                                className="form-control" name="numero"
                                                required value={numero} onChange={e => setNumeroCadastro(e.target.value)} />

                                            {numeroVazio && <div className="mt-2 text-start texto-erro">Número inválido</div>}
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="bairro"
                                            className="lb-login col-md-4 col-form-label">Bairro:</label>

                                        <div className="col-md-4 d-flex w-80">
                                            <input id="bairro" type="text"
                                                className="form-control" name="bairro"
                                                required value={bairroCadastro} onChange={e => setBairroCadastro(e.target.value)} />

                                            {bairroVazio && <div className="mt-2 w-50 texto-erro">Bairro inválido</div>}
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-2 d-block">
                                    <label htmlFor="cidade"
                                        className="lb-login col-md-4 col-form-label">Cidade:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="cidade" type="text"
                                            className="form-control" name="cidade"
                                            required value={cidadeCadastro} onChange={e => setCidadeCadastro(e.target.value)} />

                                        {cidadeVazia && <div className="mt-2 texto-erro">Cidade inválida. Por favor, tente novamente.</div>}

                                    </div>
                                </div>
                                <div className="row mb-4 d-block">
                                    <label htmlFor="password"
                                        className="lb-login col-md-4 col-form-label">Senha:</label>

                                    <div className="col-md-10 d-block m-auto">
                                        <input id="password" type="password"
                                            className="form-control" name="password"
                                            required value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)} />

                                        {senhaVazia && <div className="mt-2 texto-erro">A senha deve possuir 8 caracteres.</div>}
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