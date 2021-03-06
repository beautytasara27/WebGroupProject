import React, {Component} from 'react'
import {Navbar, Nav} from  'react-bootstrap'
import {Link} from 'react-router-dom'

export default class CustomNavBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Mental Health First</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" justify-content-end="true">
                    <Link to={'/'} className="nav-link" > Home </Link>
                    <Link to={'/about'} className="nav-link"> About </Link> 
                    <Link to={'/contact'} className="nav-link"> Contact </Link> 
                    <Link to={'/forum'} className="nav-link"> Forum </Link> 
                    <Link to={'/login'} className="nav-link"> Login </Link> 
                    <Link to={'/signup'} className="nav-link"> Sign Up </Link>
                    <Link to={'/logout'} className="nav-link"> Logout </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}