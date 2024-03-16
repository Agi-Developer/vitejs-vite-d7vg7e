import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Brand href="#home">Services</Navbar.Brand>
      <Navbar.Brand href="#home">Gallary</Navbar.Brand>
      <Navbar.Brand href="#home">Contact Us</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;