import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MenuBar = () => {

  const menuBar = (
    <Navbar variant="dark" className="menuBar">
      <Container>
        <Nav>
          <LinkContainer to="/">
            <Navbar.Brand>Philip Buzzanca</Navbar.Brand>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/projects">
            <Nav.Link active={false}>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link active={false}>Resume</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )

  return menuBar;
}

export default MenuBar