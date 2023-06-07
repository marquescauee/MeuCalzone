const CreateModal = ({ tipo, setTipo, descricao, setDescricao, resetEstado, setDescricaoVazia, descricaoVazia, setSucesso, setFalha, setTipoVazio, tipoVazio, sucesso, falha, resetErros, resetMensagensBanner, recuperarTipos }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        resetErros()
        resetMensagensBanner()

        if (!tipo.trim() || tipo.length !== 3)
            setTipoVazio(true)

        if (!descricao.trim())
            setDescricaoVazia(true)

        if (!tipo.trim() || tipo.length !== 3 || !descricao.trim()) {
            setFalha(true)
            return
        }

        const data = {
            "tipo": tipo,
            "descricao": descricao
        }

        try {
            const response = await fetch('http://localhost:8080/api/tiposProdutos', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            setSucesso('Tipo de produto cadastrado com sucesso!')
            setFalha(false)
            recuperarTipos()
            resetEstado()
            return response.json()

        } catch (err) {
            setFalha(true)
            setSucesso(false)
            console.log(err)
        }


    }
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
                                    <label htmlFor="nome" className="form-label w-100">Tipo (3 caracteres)</label>
                                    <input type="text" minLength={3} maxLength={3} className="form-control" id="nomeCreateTipo" aria-describedby="nome" value={tipo} onChange={(e) => setTipo(e.target.value)} />

                                    {tipoVazio && <div className="mt-2 texto-erro">Tipo inválido. Por favor, tente novamente.</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label w-100">Descrição</label>
                                    <input type="text" className="form-control" id="descCreateTipo" aria-describedby="descCreateTipo" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                                    {descricaoVazia && <div className="mt-2 texto-erro">Descrição inválida. Por favor, tente novamente.</div>}
                                </div>

                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" onClick={resetMensagensBanner}>Voltar</button>
                                    <button onClick={handleSubmit} type="submit" className="btn btn-warning" data-bs-dismiss="modal">Salvar</button>
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