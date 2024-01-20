
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='barraNav'> 
    <Navbar expand="lg" className="barraNav" > 
      <Container fluid> 
        <Navbar.Brand href="/">Tuti Sandwiches</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link className='btnNav' to={"/"}> Home </Link> </Nav.Link>
            <Nav.Link><Link className='btnNav' to={"/categoria/Clasicos"}>Clasicos </Link> </Nav.Link>
            <Nav.Link><Link className='btnNav' to={"/categoria/Especiales"}> Especiales </Link></Nav.Link>
            <Nav.Link><Link className='btnNav' to={"/categoria/Premium"}>Premium </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>


    

    </header>
  );


}




export default NavBar