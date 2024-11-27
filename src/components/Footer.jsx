//import { Container, Row } from "react-bootstrap"
import '../styles/footer.css'
import { Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>

        <Container fluid> 
          <Row className = "bg-dark text-white p-5">
            Desarrollado por Ani Sargsyan
          </Row>    
        </Container>
        
    </footer>
  )
}

export default Footer