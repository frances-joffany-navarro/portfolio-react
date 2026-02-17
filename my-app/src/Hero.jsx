import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {

  let heroData = [
    {
      id: 1,
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageUrl: '../src/assets/carouselImages/Christmas-Booklet-2022.jpg',
    },
    {
      id: 2,
      title: 'Second slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageUrl: '../src/assets/carouselImages/Christmas-Booklet-2025.png',
    },
    {
      id: 3,
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imageUrl: '../src/assets/carouselImages/Christmas-Booklet-2025-v2.png',
    },
  ];

  return (
    <Carousel>
      {
        heroData.map((slide) => {
          return (

            <Carousel.Item key={slide.id} interval={1000}>
              <img
                className="d-block w-100"
                src={slide.imageUrl}
                alt={slide.title}
              />
              <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>

            </Carousel.Item>

          )
        })}
    </Carousel>
  );
}

export default IndividualIntervalsExample;