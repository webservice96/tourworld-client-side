import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">TourWorld</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.displayName || user.email ?
                                <div className="d-md-flex align-items-center">
                                    <NavDropdown title="Manage Tour" id="basic-nav-dropdown">
                                        <Nav.Link as={Link} to="/managetour" className="ms-2">Manage Tour</Nav.Link>
                                        <Nav.Link as={Link} to="/newtour" className="ms-2">Add New Tour</Nav.Link>
                                    </NavDropdown>
                                    <NavDropdown title="Booking" id="basic-nav-dropdown">
                                        <Nav.Link as={Link} to="/managebooking" className="ms-2">Manage All Booking</Nav.Link>
                                        <Nav.Link as={Link} to="/mybooking" className="ms-2">My Booking</Nav.Link>
                                    </NavDropdown>





                                    <Nav.Link as={Link} to="/" onClick={logOut} className="ms-2">Logout</Nav.Link>
                                    Hi, {user.displayName}
                                </div>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;