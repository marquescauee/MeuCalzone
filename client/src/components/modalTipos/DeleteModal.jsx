const DeleteModal = ({descricao, resetEstado, setSucesso, setFalha, id, recuperarTipos}) => {

    const handleDelete = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:8080/api/tiposProdutos/${id}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });
            setSucesso('Tipo de produto removido com sucesso!')
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
            <button type="button" className="link-tabela botaoRemover" data-bs-toggle="modal" data-bs-target="#ModalDeleteTipo"
                aria-current="page">
                <div>
                    <h2 className="d-flex justify-content-center botaoRemover">Remover</h2>
                </div>
            </button>

            <div className="modal fade" id="ModalDeleteTipo" tabIndex="-1" aria-labelledby="ModalDeleteTipo" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-light bg-dark modalEdit">
                        <div className="modal-header">
                            <h5 className="modal-title" id="titleDeleteCliente">Remover Tipo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="DELETE">
                                <div>
                                    <h5>Tem certeza que deseja remover {descricao}</h5>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Voltar</button>
                                    <button type="submit" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={handleDelete}>Remover</button>
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