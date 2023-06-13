/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/headerCliente/Header"
import Login from "../../components/login/Login"
import Register from "../../components/register/Register"
import '../../General.css'

const LoginCadastro = () => {

    const [sucesso, setSucesso] = useState('')

    return (
        <>
            <Header />
            {sucesso && <div className="fundo-sucesso mx-auto">{sucesso}</div>}
            <div className="d-flex justify-content-evenly alignTop">
                <Login />
                <Register setSucesso={setSucesso} />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default LoginCadastro