import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

//images

function Hero() {
  //let imageFormat = '.jpg';
  //const imageSrc = './portfolio-react/my-app/src/assets/images/hero/';
  let heroData = [
    {
      id: 1,
      title: 'Simbang Gabi Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: 'src/assets/images/hero/design.jpg',
    },
    {
      id: 2,
      title: 'Simbang Gabi Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageSrc: 'src/assets/images/hero/development.jpg',
    },
  ];

  return (
    <Carousel fade pause='hover' variant='dark'>
      {
        heroData.map((slide) => {
          return (

            <Carousel.Item key={slide.id} interval={5000}>

              <Image className="d-none d-md-block w-100" src={slide.imageSrc} alt={slide.title} fluid />
              <Image className="d-block d-md-none w-100" src={slide.imageSrc} alt={slide.title} fluid />

            </Carousel.Item>

          )
        })}
    </Carousel>
  );
}

export default Hero;