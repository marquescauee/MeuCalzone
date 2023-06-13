import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({})
export const useAutCtx = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    useEffect(() => {
        recuperarUsuarios()

        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("users_db")

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === JSON.parse(userToken).email)

            if (hasUser) setUser(hasUser[0])
        }
    }, [])

    const login = async (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))

        const hasUser = usersStorage?.filter((user) => user.email === email)

        const validarSenha = await autenticar(email, senha)
    
        if(validarSenha === 'Pessoa não encontrada') {
            return "Email e/ou senha incorretos"
        }

        const nome = hasUser[0].nome
        const endereco = hasUser[0].endereco
        const tipo = hasUser[0].tipo
        const id = hasUser[0].id

        if (hasUser?.length) {
            if (hasUser[0].email === email) {
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem("user_token", JSON.stringify({nome, email, id, endereco, tipo, token }))
                setUser({ nome, endereco, id, tipo, email, senha })
                return
            } else {
                return "Email e/ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrado"
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user_token")
    }

    const recuperarUsuarios = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/pessoas', {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json()
            data.sort((a, b) => {
                if (a.nome > b.nome)
                    return 1
                if (a.nome < b.nome)
                    return -1
                return 0
            })
            localStorage.setItem("users_db", JSON.stringify(data))
            return data

        } catch (err) {
            console.log(err)
        }
    }

    const autenticar = async (email, senha) => {

        const credenciais = {
            "email": email,
            "senha": senha
        }

        try {
            const response = await fetch('http://localhost:8080/api/pessoas/autenticar', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(credenciais),
            });

            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }

    const atualizarRegistros = () => {
        recuperarUsuarios()
    }

    return <AuthContext.Provider value={{ user, signed: !!user, tipo: user?.tipo, atualizarRegistros, login, logout }}>{children}</AuthContext.Provider>
}