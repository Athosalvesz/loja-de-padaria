import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img alt='navbar-center' src='/src/assets/Logo.png' height="120" className="d-inline-block align-top"/>{''}
          </Navbar.Brand>
     <Navbar.Brand href="/">PodiPao</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">login</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;