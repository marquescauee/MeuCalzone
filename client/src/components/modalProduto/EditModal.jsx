const EditModal = ({descricao, setDescricao, quantidade, setQuantidade, tipo, setTipo, editarProduto, resetEstado}) => {
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
                                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                                    <input type="text" className="form-control" id="descCreateProduct" aria-describedby="desc" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantidade" className="form-label w-100">Quantidade</label>
                                    <input type="text" className="form-control" id="qtdCreateProduct" aria-describedby="qtdHelp"   value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tipo" className="form-label w-100">Tipo</label>
                                    <select className="form-select" name="calzone" id="calzone" onChange={e => setTipo(e.target.value)}>
                                            <option value="1">Calzone</option>
                                            <option value="2">Batata</option>
                                            <option value="3">Bebida</option>
                                        </select>
                                </div>
                     
                                <div className="modal-footer border-0">
                                    <button onClick={resetEstado} type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
                                    <button onClick={editarProduto} type="submit" className="btn btn-warning">Salvar</button>
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