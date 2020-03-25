/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron,Form, Container, Row, Col, Button} from 'react-bootstrap'
export default class Login extends Component{
    render(){
        return(
            <Container>
            <Jumbotron>
            <h2>Welcome to my page</h2>
            <p>Login</p>
          </Jumbotron>
                <div class="container">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </div>
            </Container>
   
        )
    }
}