const EditModal = () => {
    return (
        <>
            <button type="button" className="link-tabela botaoEditar" data-bs-toggle="modal" data-bs-target="#ModalEditProduto"
                aria-current="page">
                <div>
                    <h2 className="d-flex justify-content-center botaoEditar">Editar</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalEditProduto" tabIndex="-1" aria-labelledby="ModalEditProduto" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark modalEdit">
                        <div className="modal-header">
                            <h5 className="modal-title" id="titleEditProduct">Editar Produto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="PUT">
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label w-100">Nome</label>
                                    <input type="text" className="form-control" id="nomeEditProduct" aria-describedby="nome"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label w-100">Email</label>
                                    <input type="email" className="form-control" id="emailEditProduct" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label w-100">CPF</label>
                                    <input type="text" className="form-control" id="cpfEditProduct" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="endereco" className="form-label w-100">Endereço</label>
                                    <input type="text" className="form-control" id="enderecoEditProduct" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label w-100">Senha</label>
                                    <input type="password" className="form-control" id="passwordEditProduct" />
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
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