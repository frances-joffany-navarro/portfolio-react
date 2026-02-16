//React Components
import Header from "./Header";
import Footer from "./Footer";
import IndividualIntervalsExample from "./IndividualIntervalsExample";


//Bootstrap Components

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
        <Header />
        <Container className="main-container">
          <IndividualIntervalsExample />
        </Container>
        <Footer />
    </>
  );
}

export default App
