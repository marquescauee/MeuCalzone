const CreateModal = ({ tipo, setTipo, descricao, setDescricao, resetEstado,cadastrarTipo}) => {
    return (
        <>
            <button type="button" className="b1" data-bs-toggle="modal" data-bs-target="#ModalCreateTipo"
                aria-current="page">
                <div>
                    <h2 className="d-flex text-light justify-content-center">Adicionar</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalCreateTipo" tabIndex="-1" aria-labelledby="ModalCreateTipo" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCreateTitleCliente">Adicionar Tipo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label w-100">Tipo (1 caractere)</label>
                                    <input type="text" maxLength={1} className="form-control" id="nomeCreateTipo" aria-describedby="nome" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                                    <input type="text" className="form-control" id="descCreateTipo" aria-describedby="descCreateTipo" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                </div>
                                
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" onClick={resetEstado}>Voltar</button>
                                    <button onClick={cadastrarTipo} type="submit" className="btn btn-warning">Salvar</button>
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