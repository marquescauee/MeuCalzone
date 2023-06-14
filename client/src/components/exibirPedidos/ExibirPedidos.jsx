/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './exibirPedidos.css'
import { useAutCtx } from '../../context/AuthContext';

const ExibirPedidos = () => {

    const { user } = useAutCtx()

    const [pedidos, setPedidos] = useState([])

    const recuperarPedidosUsuario = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/pedidos/${user.id}`, {
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

            let array = []
            let pos = 0
            let cont = 5

            for (let i = 0; i < data.length; i++) {
                let partArray = []
                if (i === 0) {
                    partArray[0] = data[i][0]
                    partArray[1] = data[i][1]
                    partArray[2] = data[i][2]
                    partArray[3] = data[i][5]
                    partArray[4] = data[i][4]

                    array.push(partArray)
                }
                else if (data[i][0] === data[i - 1][0]) {
                    array[pos][cont] = data[i][4]
                    cont++
                    array[pos][cont] = data[i][5]
                    cont++

                }
                else {
                    pos++
                    cont = 5

                    partArray[0] = data[i][0]
                    partArray[1] = data[i][1]
                    partArray[2] = data[i][2]
                    partArray[3] = data[i][5]
                    partArray[4] = data[i][4]

                    array.push(partArray)
                }
            }

            setPedidos(array)
            return data

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        recuperarPedidosUsuario(1)
    }, [])

    return (
        <div className='divMargin'>
            <div className="d-flex justify-content-center text-light mainDiv">
                <h2>Pedidos Realizados</h2>
            </div>
            <div id="tabela-preco" className="d-flex justify-content-center align-items-center">
                <table className="table table-bordered table-striped w-75 table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Pedido</th>
                            <th scope="col">Forma de Entrega</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedidos.map(pedido => {
                                return <tr key={pedido[0]}>
                                    {
                                        (pedido[4] && pedido[5] && pedido[7] && pedido[9]) &&
                                        <td>
                                            {pedido[4] + " " + pedido[3] + "x | " + pedido[5] + " " + pedido[6] + "x | " + pedido[7] + " " + pedido[8] + "x | " + pedido[9] + " " + pedido[10] + "x"}
                                        </td>
                                    }
                                    {
                                        (pedido[4] && pedido[5] && pedido[7] && !pedido[9]) &&
                                        <td>
                                            {pedido[4] + " " + pedido[3] + "x | " + pedido[5] + " " + pedido[6] + "x | " + pedido[7] + " " + pedido[8] + "x"}
                                        </td>
                                    }
                                    {
                                        (pedido[4] && pedido[5] && !pedido[7]) &&
                                        <td>
                                            {pedido[4] + " " + pedido[3] + "x | " + pedido[5] + " " + pedido[6] + "x"}
                                        </td>
                                    }
                                    {
                                        (pedido[4] && !pedido[5] && !pedido[7]) &&
                                        <td>
                                            {pedido[4] + " " + pedido[3] + "x"}
                                        </td>
                                    }
                                    <td>
                                        {pedido[1]}
                                    </td>
                                    <td>
                                        R${pedido[2]},00
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ExibirPedidos