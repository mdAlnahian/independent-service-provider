import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut =()=>{
    signOut(auth);
  }

  return (
    <Navbar
      className="p-4"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <span className="text-white">Al's</span> LAWYERS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto link-font">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <button onClick={handleSignOut}>Sign Out</button>
            ) : (
              <Nav.Link as={Link} to="/login" className="link-font">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;
