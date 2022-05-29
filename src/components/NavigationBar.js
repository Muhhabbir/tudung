import { Navbar, Container, Nav, Dropdown, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" color="white">
            <Container className="text-white">
    <Navbar.Brand href="#home" className="text-white">SI PALING IMUT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Dropdown id="dropdown1">
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
      FEATURED
    </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown id="dropdown2">
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
      COLLECTIONS
    </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown id="dropdown3">
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
      CATEGORIES
    </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavigationBar;