import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

//images

function IndividualIntervalsExample() {
  let imgSrc = '../src/assets/carouselImages/';
  let imgFormat = '.png';
  let heroData = [
    {
      id: 1,
      title: 'Simbang Gabi Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageName: 'design-booklet-4',
    },
    {
      id: 2,
      title: 'Simbang Gabi Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageName: 'design-booklet-1',
    },
    {
      id: 3,
      title: 'Anniversary Booklet Design',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageName: 'design-booklet-2',
    },
  ];

  return (
    <Carousel fade pause='hover' variant='dark' >
      {
        heroData.map((slide) => {
          return (

            <Carousel.Item key={slide.id} interval={3000}>
              {/*  <img
                className="d-none d-lg-block w-100"
                src={imgSrc + slide.imageName + '-lg' + imgFormat}
                alt={slide.title}
              /> */}

              <Image className="d-none d-md-block" src={imgSrc + slide.imageName + '-lg' + imgFormat} alt={slide.title} fluid />

              <img
                className="d-block d-md-none center"
                src={imgSrc + slide.imageName + imgFormat}
                alt={slide.title}
              />
              {/* <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption> */}

            </Carousel.Item>

          )
        })}
    </Carousel>
  );
}

export default IndividualIntervalsExample;