import { Card, Form, Button, Container} from 'react-bootstrap'

const PrincipalPagina = () => {
    return <Container>
        <h1>Build your PC!</h1>
        <h3>Just for what you need</h3>
        <Button className='mt-3' variant='warning'>Build for begginer</Button>
        <Button className='mt-3' variant='warning'>Adavanced building</Button>
    </Container>

}

export default PrincipalPagina