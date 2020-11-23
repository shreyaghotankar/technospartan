import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

const Navigationbar = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => authService.login('/');
  const logout = async () => authService.logout('/');

  return (
  <div>
  <Navbar id="color-nav" variant="light" expand="lg" >
      <Navbar.Brand href="/">TechnoSpartan - Cloud Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" id="navbar">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          {authState.isAuthenticated && (
          <Nav.Item><Nav.Link href="/dashboard">Dashboard</Nav.Link></Nav.Item>)}
          {authState.isAuthenticated && (<Nav.Item><Nav.Link id="logout-button" as="a" onClick={logout}>Logout</Nav.Link></Nav.Item>)}
          {!authState.isPending && !authState.isAuthenticated && (<Nav.Item><Nav.Link as="a" onClick={login}>Login</Nav.Link></Nav.Item>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  
    
  );
};

export default Navigationbar;


