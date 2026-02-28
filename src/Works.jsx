import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Works({ data }) {
  return (
    <div className="works d-block w-100">
      <h3>My Works</h3>
      <Container>
        {data.map((item) => (
          <Row key={item.id} className="work-item">
            <Col><Image src={item.imageSrc} alt={item.title} rounded thumbnail /></Col>
            </Row> 
          ))}
      </Container>
    </div>
  );
}

export default Works;