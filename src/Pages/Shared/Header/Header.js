import React from 'react';
import { ButtonGroup, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
       
    <>
        <Navbar className="shadow-sm"  bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home" className="text-danger fs-1">Tourify</Navbar.Brand>
            <Navbar.Toggle />
           
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home" className="text-dark">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="text-dark">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/myOrder" className="text-dark">{
                user?.email && "My Orders"
            }</Nav.Link>
            {user?.email && <NavDropdown title="admin" id="basic-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/addService">Add Service</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/manageAllService">Manage All Orders</NavDropdown.Item>

           </NavDropdown>}
            <Navbar.Text className="me-3" >
                Signed in as: <a href="#login" className="text-danger">{user?.displayName}</a>
            </Navbar.Text>
            {
                user?.email ?<Button onClick={logOut} >Logout</Button>:
                <Nav.Link as={HashLink} to="/login" className="text-dark">Login</Nav.Link>          
            }         
           
            
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <br />
        
    </>
       
    );
};

export default Header;