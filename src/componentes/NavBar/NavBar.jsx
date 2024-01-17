
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='barraNav'> 
        <Navbar.Brand href="/">Tuti Sandwiches</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={"/categoria/Clasicos"}>Clasicos</Nav.Link>
            <Nav.Link href={"/categoria/Especiales"}>Especiales</Nav.Link>
            <Nav.Link href={"/categoria/Premium"}>Premium</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>


    

    </header>
  );


}




export default NavBar