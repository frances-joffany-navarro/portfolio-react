import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

function Works({ data }) {
  return (
    <Container className="works d-block w-100 pt-5">
      <h3>My Works</h3>
      <div>
        <Nav className="justify-content-center" activeKey="/all">
          <Nav.Item>
            <Nav.Link href="/all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="design">Design</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="development">Development</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Row className="work-item" >
        {data.map((item) => (
          <Col key={item.id}><Image src={item.imageSrc} alt={item.title} rounded thumbnail /></Col>
        ))}
      </Row>
    </Container>
  );
}

export default Works;