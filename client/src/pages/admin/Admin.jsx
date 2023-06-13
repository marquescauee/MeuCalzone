import Footer from "../../components/footer/Footer";
import Header from "../../components/header/headerAdmin/Header";
import '../../components/header/headerAdmin/header.css'
import { useAutCtx } from "../../context/AuthContext";

const Admin = () => {

    const { user } = useAutCtx()

    return (
        <div>
            <Header />
            {
                (user && user.nome) &&
                <div className="tituloAdmin">
                    Olá, {user.nome}, você está na página de Admin.
                </div>
            }
            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    )
}

export default Admin;