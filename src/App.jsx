//React Components
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Works from "./Works";

//images
import designImage1 from "./assets/images/hero/design-booklet-2022.png";
import designImage2 from "./assets/images/hero/design-booklet-2024.png";
import designImage3 from "./assets/images/hero/design-booklet-2025.png";


//Bootstrap Components
import Container from 'react-bootstrap/Container';

function App() {

  let data = [
    {
      id: 1,
      title: 'Anniversary Booklet',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: designImage1,
      category: 'design',
    },
    {
      id: 2,
      title: 'Simbang Gabi Booklet 2024',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: designImage2,
      category: 'design',
    },
    {
      id: 3,
      title: 'Simbang Gabi Booklet 2025',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: designImage3,
      category: 'design',
    },
  ];
  return (
    <>
      <Header />
      <Container className="main-container">
        <Hero />
        <Works data={data} />
      </Container>
      <Footer />
    </>
  );
}

export default App
