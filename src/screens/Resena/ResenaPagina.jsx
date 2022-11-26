import { useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'

const ResenaPagina = () => {

    const [listadoResenas, setListadoResenas] = useState([])


    const httpObtenerResenas = async (usuario) => {
        const resp =  await fetch("http://localhost:4447/resena") 
        const data = await resp.json()
        console.log(data)
        setListadoResenas(data)

    }
    useEffect(() => {
        httpObtenerResenas()
    })

    return <Container>
        <h1>User reviews</h1>

        <h3>Global rate: </h3>

        

        

    </Container>
}

export default ResenaPagina