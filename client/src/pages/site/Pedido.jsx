import Header from "../../components/header/headerCliente/Header"
import Footer from "../../components/footer/Footer"
import FormPedido from "../../components/formPedido/FormPedido"
import '../../General.css'

const Pedido = () => {
    return (
        <div className="overflow">
            <Header />
            <FormPedido />
            <div className="marginTopo">
                <Footer />
            </div>
        </div>
    )
}

export default Pedido