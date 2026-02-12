import Container from 'react-bootstrap/Container';

function Footer() {
  return (
      <Container fluid className="text-center py-3" sticky="bottom">
        <p>&copy; {new Date().getFullYear()} FJN Upskilling</p>
      </Container>

  );
}

export default Footer