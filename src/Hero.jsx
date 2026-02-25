import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import image1 from "./assets/images/hero/design.jpg";
import image2 from "./assets/images/hero/development.jpg";
//images

function Hero() {
  let heroData = [
    {
      id: 1,
      title: 'Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: image1,
    },
    {
      id: 2,
      title: 'Development',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: image2,
    },
  ];

  return (
    <Carousel fade pause='hover' variant='dark'>
      {
        heroData.map((slide) => {
          return (

            <Carousel.Item key={slide.id} interval={5000}>

              <Image className="d-block w-100" src={slide.imageSrc} alt={slide.title} fluid />
              {/* <Image className="d-block d-md-none w-100" src={slide.imageSrc} alt={slide.title} fluid /> */}
              <Carousel.Caption>
                <h1>{slide.title}</h1>
              </Carousel.Caption>
            </Carousel.Item>

          )
        })}
    </Carousel>
  );
}

export default Hero;