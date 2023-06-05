const DeleteModal = () => {

    return (
        <>
            <button type="button" className="link-tabela botaoRemover" data-bs-toggle="modal" data-bs-target="#ModalDeleteProduto"
                aria-current="page">
                <div>
                    <h2 className="d-flex justify-content-center botaoRemover">Remover</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalDeleteProduto" tabIndex="-1" aria-labelledby="ModalDeleteProduto" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark modalEdit">
                        <div className="modal-header">
                            <h5 className="modal-title" id="titleDeleteProduct">Remover Produto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="DELETE">
                                <div>
                                    <h5>Tem certeza que deseja remover Trazer do banco?</h5>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-outline-danger">Remover</button>
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