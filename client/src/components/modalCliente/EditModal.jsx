const EditModal = ({editarCliente, setNome, nome, setEmail, email, setCpf, cpf, setEndereco, endereco, setSenha, senha, resetEstados}) => {

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
                    <div className="modal-content text-dark modalEdit">
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
                                    <input type="email" className="form-control" id="emailEditCliente" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label w-100">CPF</label>
                                    <input type="text" className="form-control" id="cpf" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="endereco" className="form-label w-100">Endereço</label>
                                    <input type="text" className="form-control" id="enderecoEditCliente" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label w-100">Senha</label>
                                    <input type="password" className="form-control" id="passwordEditCliente" />
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" onClick={resetEstados} className="btn btn-outline-dark" data-bs-dismiss="modal">Voltar</button>
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