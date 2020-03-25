import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from  'react-bootstrap'
import {Link} from 'react-router-dom'

export default class CustomNavBar extends Component{
    render(){
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Mental Health First</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" justify-content-end>
                <Nav.Link><Link to={'/home'} className="nav-link"> Home </Link></Nav.Link>
                <Nav.Link><Link to={'/about'} className="nav-link"> About </Link></Nav.Link>
                    <Nav.Link><Link to={'/contact'} className="nav-link"> Contact </Link></Nav.Link>
                    <Nav.Link><Link to={'/forum'} className="nav-link"> Forum </Link></Nav.Link>
                    <Nav.Link><Link to={'/login'} className="nav-link"> Login </Link></Nav.Link>
                    <Nav.Link><Link to={'/signup'} className="nav-link"> Sign Up </Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        
        </Navbar>
        )
    }
}