import Carousel from "react-bootstrap/Carousel";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/Blade_Runner.png"}
          height="auto"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Blade Runner 2049 (2017)</h3>
          <p>dir. Denis Villeneuve</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/IT_2019.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>IT (2019)</h3>
          <p>dir. Andy Muschietti</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/Space_Oddysey.png"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>2001: A Space Odyssey (1968)</h3>
          <p>dir. Stanley Kubrick</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
