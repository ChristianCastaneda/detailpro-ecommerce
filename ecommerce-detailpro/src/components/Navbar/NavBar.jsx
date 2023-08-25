import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget/CartWidget'

const NavigationBar = () => {

        return (
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Inicio</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Pulimentos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Selladores
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Aplicadores</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#carrito">
                    <span>2 <CartWidget /></span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
)}

export default NavigationBar