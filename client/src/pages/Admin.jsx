import Footer from "../components/footer/Footer";
import Header from "../components/header/headerAdmin/Header";
import '../components/header/headerAdmin/header.css'

const Admin = () => {
    return (
        <div>
            <Header />
            <div className="tituloAdmin">
                Olá, Fulano, você está na página de Admin.
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    )
}

export default Admin;