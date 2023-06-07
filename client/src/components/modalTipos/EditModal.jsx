const EditModal = ({tipo, setTipo, descricao, setDescricao, resetEstado, setDescricaoVazia, descricaoVazia, setSucesso, sucesso, setFalha, falha, setTipoVazio, tipoVazio, recuperarTipos, id, recuperarTipo, resetErros, resetMensagensBanner}) => {

    const handleUpdate = async (e) => {
        e.preventDefault()

        resetErros()
        resetMensagensBanner()

        if(!tipo.trim() || tipo.length !== 3)
            setTipoVazio(true)
        
        if(!descricao.trim())
            setDescricaoVazia(true)

        if(!tipo.trim() || tipo.length !== 3 ||!descricao.trim()) {
            setFalha(true)
            return
        }

        const data = {
            "tipo": tipo,
            "descricao": descricao
        }

        try {
            const response = await fetch(`http://localhost:8080/api/tiposProdutos/${id}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            setSucesso('Tipo de produto atualizado com sucesso!')
            setFalha(false)
            recuperarTipos()
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
            console.log(err)
        }
    }

    return (
        <>
            <button type="button" onClick={() => recuperarTipo(id)} className="link-tabela botaoEditar" data-bs-toggle="modal" data-bs-target="#ModalEditTipo"
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
                                    <input type="text" minLength={3} maxLength={3} className="form-control" id="nomeEditTipo" aria-describedby="nome" value={tipo} onChange={e => setTipo(e.target.value)}/>

                                    {tipoVazio && <div className="mt-2 texto-erro">Tipo inválido. Por favor, tente novamente.</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                                    <input type="text" className="form-control" id="emailEditTipo" aria-describedby="emailHelp" value={descricao} onChange={e => setDescricao(e.target.value)} />

                                    {descricaoVazia && <div className="mt-2 texto-erro">Descrição inválida. Por favor, tente novamente.</div>}
                                </div>
                                
                                <div className="modal-footer border-0">
                                    <button type="button" onClick={resetMensagensBanner} className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
                                    <button onClick={handleUpdate} type="submit" className="btn btn-warning" data-bs-dismiss="modal">Salvar</button>
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