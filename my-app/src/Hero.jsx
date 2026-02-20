import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import imgSrc from 'my-app/src/assets/images/hero';
//images

function Hero() {
  let imgFormat = '.jpg';
  let heroData = [
    {
      id: 1,
      title: 'Simbang Gabi Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageName: 'design',
    },
    {
      id: 2,
      title: 'Simbang Gabi Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageName: 'development',
    },
  ];

  return (
    <Carousel fade pause='hover' variant='dark'>
      {
        heroData.map((slide) => {
          return (

            <Carousel.Item key={slide.id} interval={5000}>

              <Image className="d-none d-md-block w-100" src={imgSrc + slide.imageName + imgFormat} alt={slide.title} fluid />
              <Image className="d-block d-md-none w-100" src={imgSrc + slide.imageName + imgFormat} alt={slide.title} fluid />

            </Carousel.Item>

          )
        })}
    </Carousel>
  );
}

export default Hero;