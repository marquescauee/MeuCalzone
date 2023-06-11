import './modalCliente.css'

const CreateModal = ({ setNome, nome, setEmail, email, setCpf, cpf, setSenha, senha, resetEstados, setRua, rua, setNumero, numero, setBairro, bairro, setCidade, cidade, setSucesso, setFalha, nomeVazio, setNomeVazio, emailVazio, setEmailVazio, cpfVazio, setCpfVazio, senhaVazia, setSenhaVazia, numeroVazio, setNumeroVazio, setBairroVazio, bairroVazio, setCidadeVazia, cidadeVazia, setRuaVazia, ruaVazia, resetErros, resetMensagensBanner, recuperarClientes}) => {

    const handleSubmit = async (e) => {

        e.preventDefault()
        resetErros()
        resetMensagensBanner()

        if (!nome.trim() || nome.length < 3)
            setNomeVazio(true)

        if (!email.trim())
            setEmailVazio(true)

        if (cpf.length !== 11)
            setCpfVazio(true)

        if (!rua.trim())
            setRuaVazia(true)
        if (!numero)
            setNumeroVazio(true)

        if (!bairro.trim())
            setBairroVazio(true)

        if (!cidade.trim())
            setCidadeVazia(true)

        if (!senha.trim() || senha.length < 8) {

            setSenhaVazia(true)
        }

        if (!nome.trim() || nome.length < 3 || !email.trim() || cpf.length !== 11 || !rua.trim() || !numero || !bairro.trim() || !cidade.trim() || !senha.trim() || senha.length < 8) {
            setFalha(true)
            return
        }

        const data = {
            "nome": nome,
            "email": email,
            "senha": senha,
            "cpf": cpf,
            "tipo": "c",
            "endereco": {
                "rua": rua,
                "numero": numero,
                "bairro": bairro,
                "cidade": cidade
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
            setSucesso('Cliente cadastrado com sucesso!')
            setFalha(false)
            recuperarClientes()
            resetEstados()
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
            console.log(err)
        }
    }

    return (
        <>
            <button type="button" className="b1" data-bs-toggle="modal" data-bs-target="#ModalCreateCliente"
                aria-current="page">
                <div>
                    <h2 className="d-flex text-light justify-content-center">Adicionar</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalCreateCliente" tabIndex="-1" aria-labelledby="ModalCreateCliente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCreateTitleCliente">Adicionar Cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label w-100">Nome</label>
                                    <input type="text" className="form-control" id="nomeCreateCliente" aria-describedby="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Informe seu nome (3 e 40 caracteres)" />

                                    {nomeVazio && <div className="mt-2 texto-erro">Nome inválido. Por favor, tente novamente.</div>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label w-100">Email</label>
                                    <input type="email" className="form-control" id="emailCreateCliente" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Informe seu email (xxxxx@xxxx.xx)" />

                                    {emailVazio && <div className="mt-2 texto-erro">Email inválido. Por favor, tente novamente.</div>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label w-100">CPF</label>
                                    <input type="text" className="form-control" id="cpfCreateCliente" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Informe seu CPF (11 dígitos)" />

                                    {cpfVazio && <div className="mt-2 texto-erro">CPF inválido. Por favor, tente novamente.</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="rua" className="form-label w-100">Rua</label>
                                    <input type="text" className="form-control" id="ruaCreateCliente" value={rua} onChange={(e) => setRua(e.target.value)} placeholder="Informe sua rua" />

                                    {ruaVazia && <div className="mt-2 texto-erro">Rua inválida. Por favor, tente novamente.</div>}
                                </div>

                                <div className="mb-3 d-flex">
                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="numero"
                                            className="lb-login col-md-4 col-form-label ">Número:</label>

                                        <div className="col-md-3 d-flex  w-50">
                                            <input id="numeroCreate" type="number" min="0"
                                                className="form-control" name="numero"
                                                required value={numero} onChange={(e) => setNumero(e.target.value)} />
                                        </div>
                                        {numeroVazio && <div className="mt-2 text-start texto-erro">Número inválido</div>}
                                    </div>

                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="bairro"
                                            className="lb-login col-md-4 col-form-label">Bairro:</label>

                                        <div className="col-md-4 d-flex w-80">
                                            <input id="bairroCreate" type="text"
                                                className="form-control" name="bairro"
                                                required value={bairro} onChange={(e) => setBairro(e.target.value)} />
                                        </div>
                                        {bairroVazio && <div className="mt-2 w-50 texto-erro">Bairro inválido</div>}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cidade" className="form-label w-100">Cidade</label>
                                    <input type="text" className="form-control" id="cidadeCreateCliente" value={cidade} onChange={(e) => setCidade(e.target.value)} />

                                    {cidadeVazia && <div className="mt-2 texto-erro">Cidade inválida. Por favor, tente novamente.</div>}

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label w-100">Senha</label>
                                    <input type="password" className="form-control" id="passwordCreateCliente" value={senha} onChange={(e) => setSenha(e.target.value)} />

                                    {senhaVazia && <div className="mt-2 texto-erro">A senha deve possuir 8 caracteres.</div>}
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" onClick={resetMensagensBanner}>Voltar</button>
                                    <button className="btn btn-warning" id="botaoSalvarCliente" data-bs-dismiss="modal" onClick={handleSubmit}>Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateModal