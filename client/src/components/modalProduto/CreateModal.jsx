
const CreateModal = ({descricao, setDescricao, qtd, setQtd, idTipo, setIdTipo, descricaoVazia, setDescricaoVazia, qtdVazia, setQtdVazia, idTipoVazio, setIdTipoVazio, setSucesso, setFalha, tipos, resetEstado, resetMensagensBanner, resetErros, recuperarProdutos, setDescricaoTipo, descricaoTipo, setTipoTipo, tipoTipo}) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        resetErros()
        resetMensagensBanner()

        if(!descricao.trim())
            setDescricaoVazia(true)

        if(qtd < 0)
            setQtdVazia(true)

        if(idTipo === 0)
            setIdTipoVazio(true)

        if(!descricao.trim() || qtd < 0 || idTipo === 0) {
            setFalha(true)
            return
        }

        const data = {
            "tipo": {
                "idTipoProduto": idTipo,
                "tipo": tipoTipo,
                "descricao": descricaoTipo
            },
            "descricao": descricao,
            "qtd": qtd
        }

        try {
            const response = await fetch('http://localhost:8080/api/produtos', {
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
            setSucesso('Produto cadastrado com sucesso!')
            setFalha(false)
            recuperarProdutos()
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

                                    {descricaoVazia && <div className="mt-2 texto-erro">Descrição inválida. Por favor, tente novamente.</div>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantidade" className="form-label w-100">Quantidade</label>
                                    <input type="number" min={0} className="form-control" id="qtdCreateProduct" aria-describedby="emailHelp" value={qtd} onChange={e => setQtd(e.target.value)}/>
                            
                                    {qtdVazia && <div className="mt-2 texto-erro">Quantidade inválida. Por favor, tente novamente.</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tipo" className="form-label w-100">Tipo</label>
                                    <select className="form-select" name="calzone" id="calzone" onChange={e => {
                                        let split = e.target.value.split(" ")
                                        setIdTipo(split[0])
                                        setTipoTipo(split[1])
                                        setDescricaoTipo(split[2])

                                    }}>
                                        <option defaultValue={"none"}>Selecione uma opção</option>
                                        {
                                            tipos.map(t => {
                                                return <option key={t.idTipoProduto} value={t.idTipoProduto + " " + t.tipo + " " + t.descricao}>{t.descricao}</option>
                                            })
                                        }
                                    </select>

                                    {idTipoVazio && <div className="mt-2 texto-erro">Tipo inválido. Por favor, tente novamente.</div>}
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