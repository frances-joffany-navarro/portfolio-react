//React Components
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";


//Bootstrap Components
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Header />
      <Container className="main-container">
        <Hero />
      </Container>
      <Footer />
    </>
  );
}

export default App
