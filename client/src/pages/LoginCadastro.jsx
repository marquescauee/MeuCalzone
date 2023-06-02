import Footer from "../components/footer/Footer"
import Header from "../components/header/headerCliente/Header"
import Login from "../components/login/Login"
import Register from "../components/register/Register"

const LoginCadastro = () => {
    return (
        <>
            <Header />
            <div className="d-flex justify-content-evenly align-items-center">
                <Login />
                <Register />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default LoginCadastro