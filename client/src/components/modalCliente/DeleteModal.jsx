const DeleteModal = ({resetEstados, deletarCliente, nome}) => {

    return (
        <>
            <button type="button" className="link-tabela botaoRemover" data-bs-toggle="modal" data-bs-target="#ModalDeleteCliente"
                aria-current="page">
                <div>
                    <h2 className="d-flex justify-content-center botaoRemover">Remover</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalDeleteCliente" tabIndex="-1" aria-labelledby="ModalDeleteCliente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark modalEdit">
                        <div className="modal-header">
                            <h5 className="modal-title" id="titleDeleteCliente">Remover Cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="DELETE">
                                <div>
                                    <h5>Tem certeza que deseja remover {nome}</h5>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" onClick={resetEstados}>Voltar</button>
                                    <button type="submit" className="btn btn-outline-danger" onClick={deletarCliente}>Remover</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal