import { Link } from 'react-router-dom'
import './botaoPedido.css'

const BotaoPedido = () => {
    return (
        <div className='divBotao'>
            <Link to={"/pedido"} className="botao">Faça seu Pedido!</Link>
        </div>
    )
}

export default BotaoPedido