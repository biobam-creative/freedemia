import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BootstrapNav = () => {
  return (
    <div style={{ display: "block" }}>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="sm"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/">Courses</NavLink>
              <NavLink to="/opportunities">Opportunities</NavLink>

              <NavLink to="/pdfsplit">Split PDF</NavLink>
              <NavLink to="/pdfmerge">Merge PDF</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default BootstrapNav;
