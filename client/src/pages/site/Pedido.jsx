import Header from "../../components/header/headerCliente/Header"
import Footer from "../../components/footer/Footer"
import FormPedido from "../../components/formPedido/FormPedido"
import '../../General.css'
import { useState } from "react"

const Pedido = () => {

    const [sucesso, setSucesso] = useState('')

    return (
        <div className="overflow">
            <Header />
            {sucesso && <div className="fundo-sucesso mx-auto">{sucesso}</div>}
            <FormPedido setSucesso={setSucesso} />
            <div className="marginTopo">
                <Footer />
            </div>
        </div>
    )
}

export default Pedido