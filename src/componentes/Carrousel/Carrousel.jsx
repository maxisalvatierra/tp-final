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
          <p>Disfruta de los Sabores Clasicos de nuestros productos</p>
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
          <p>Pensados Especialmente para vos!</p>
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
           Un sabor mas alla de tu imaginación y tu paladar!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;