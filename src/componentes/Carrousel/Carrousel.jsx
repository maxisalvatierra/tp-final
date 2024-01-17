import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='../public/carrousel1.jpg'
          alt="Clasicos"
        />
        <Carousel.Caption>
          <h5 className='titulos'>Clasicos</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/carrousel2.webp"
          alt="Especiales"
        />
        <Carousel.Caption>
          <h5 className='titulos'>Especiales</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/carrousel3.jpg"
          alt="Premium"
        />
        <Carousel.Caption>
          <h5 className='titulos'>Premium</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;