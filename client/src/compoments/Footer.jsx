import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    const currentDate = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>App &copy; {currentDate}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer