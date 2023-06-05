const EditModal = ({tipo, setTipo, descricao, setDescricao, editarTipo, resetEstado}) => {
    return (
        <>
            <button type="button" className="link-tabela botaoEditar" data-bs-toggle="modal" data-bs-target="#ModalEditTipo"
                aria-current="page">
                <div>
                    <h2 className="d-flex justify-content-center botaoEditar">Editar</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalEditTipo" tabIndex="-1" aria-labelledby="ModalEditTipo" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark modalEdit">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalEditTitleTipo">Editar Tipo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="PUT">
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label w-100">Tipo</label>
                                    <input type="text" maxLength={1} className="form-control" id="nomeEditTipo" aria-describedby="nome" value={tipo} onChange={e => setTipo(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                                    <input type="text" className="form-control" id="emailEditTipo" aria-describedby="emailHelp" value={descricao} onChange={e => setDescricao(e.target.value)} />
                                </div>
                                
                                <div className="modal-footer border-0">
                                    <button type="button" onClick={resetEstado} className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
                                    <button onClick={editarTipo} type="submit" className="btn btn-warning">Salvar</button>
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