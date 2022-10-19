import Carousel from "react-bootstrap/Carousel";

function CarouselFade() {
  return (
    <Carousel fade className="m-0">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/Blade_Runner.png"}
          height="auto"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Track films you've watched.</h1>
          <h1>Save those you want to see.</h1>
          <h1>Tell your friends what's good.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/IT_2019.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Track films you've watched.</h1>
          <h1>Save those you want to see.</h1>
          <h1>Tell your friends what's good.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/assets/Space_Oddysey_2.png"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Track films you've watched.</h1>
          <h1>Save those you want to see.</h1>
          <h1>Tell your friends what's good.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
