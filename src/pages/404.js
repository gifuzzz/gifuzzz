import * as React from "react"
import { Link } from "gatsby" 
import './404.css'
import travolta from '../images/image_processing20210217-20195-vnftmi.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFoundPage = () => {
  return (
    <div
      className="center notfound"
    >
      <Container>
        <Row>
          <Col className='center'>
          <h1 style={{fontSize: 90}}>404</h1>
            <p style={{fontSize: 20}}>
              There's nothing here (or I'm bad at web developing).
            </p>
            <Link to="/" style={{fontSize: 20}}>Go home</Link>
          </Col>
          <Col className='center'>
            <img id="travolta" src={travolta} alt="Confused Travolta"></img>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NotFoundPage
