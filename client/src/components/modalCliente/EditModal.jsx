import { useEffect } from "react"

const EditModal = ({editarCliente, setNome, nome, setEmail, email, setCpf, cpf,  setSenha, senha, resetEstados, setRua, rua, setNumero, numero, setBairro, bairro, setCidade, cidade,  sucesso, setSucesso, falha, setFalha, nomeVazio, setNomeVazio, emailVazio, setEmailVazio, cpfVazio, setCpfVazio, senhaVazia, setSenhaVazia, numeroVazio, setNumeroVazio, setBairroVazio, bairroVazio, setCidadeVazia, cidadeVazia, setRuaVazia, ruaVazia}) => {

    useEffect(() => {

    }, [resetEstados])

    return (
        <>
            <button type="button" onClick={editarCliente} className="link-tabela botaoEditar" data-bs-toggle="modal" data-bs-target="#ModalEditCliente"
                aria-current="page">
                <div>
                    <h2 className="d-flex justify-content-center botaoEditar">Editar</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalEditCliente" tabIndex="-1" aria-labelledby="ModalEditCliente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark modalEdit">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalEditTitleCliente">Editar Cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="PUT">
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label w-100">Nome</label>
                                    <input type="text" className="form-control" id="nomeEditCliente" aria-describedby="nome" value={nome} onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label w-100">Email</label>
                                    <input type="email" className="form-control" id="emailEditCliente" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label w-100">CPF</label>
                                    <input type="text" className="form-control" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)}  />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="rua" className="form-label w-100">Rua</label>
                                    <input type="text" className="form-control" id="ruaEditCliente"  value={rua} onChange={(e) => setRua(e.target.value)}  />
                                </div>

                                <div className="mb-3 d-flex">
                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="numero"
                                            className="lb-login col-md-4 col-form-label ">Número:</label>

                                        <div className="col-md-3 d-flex  w-50">
                                            <input id="numeroEdit" type="number" min="0"
                                                className="form-control" name="numero"
                                                required value={numero} onChange={(e) => setNumero(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className='d-flex flex-column w-50'>
                                        <label htmlFor="bairro"
                                            className="lb-login col-md-4 col-form-label">Bairro:</label>

                                        <div className="col-md-4 d-flex w-80">
                                            <input id="bairroEdit" type="text"
                                                className="form-control" name="bairro"
                                                required value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cidade" className="form-label w-100">Cidade</label>
                                    <input type="text" className="form-control" id="cidadeEditCliente"  value={cidade} onChange={(e) => setCidade(e.target.value)}  />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label w-100">Senha</label>
                                    <input type="password" className="form-control" id="passwordEditCliente"  value={senha} onChange={(e) => setSenha(e.target.value)} />
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" onClick={resetEstados} className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-warning">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditModal