const CreateModal = ({descricao, setDescricao, quantidade, setQuantidade, tipo, setTipo, cadastrarProduto, resetEstado}) => {

    return (
        <>
            <button type="button" className="b1" data-bs-toggle="modal" data-bs-target="#ModalCreateProduto"
                aria-current="page">
                <div>
                    <h2 className="d-flex text-light justify-content-center">Adicionar</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalCreateProduto" tabIndex="-1" aria-labelledby="ModalCreateProduto" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCreateTitle">Adicionar Produto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                                    <input type="text" className="form-control" id="descCreateProduct" aria-describedby="desc" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantidade" className="form-label w-100">Quantidade</label>
                                    <input type="text" className="form-control" id="qtdCreateProduct" aria-describedby="emailHelp" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
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
                                    <button onClick={cadastrarProduto} type="submit" className="btn btn-warning">Salvar</button>
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