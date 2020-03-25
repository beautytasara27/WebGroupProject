/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Form, Container, Row, Col, Button} from 'react-bootstrap'
export default class Signup extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                  <h2>Welcome to my page</h2>
                  <p>Sign UP</p>
                </Jumbotron>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
   
        )
    }
}