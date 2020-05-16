/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Form, Container, Row, Col, Button} from 'react-bootstrap'
export default class Signup extends Component{
    state = {
        password: '',
        username: '',
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    render(){
        return(
            <Container>
                <Jumbotron>
                  <h2>Welcome to my page</h2>
                  <p>Sign UP</p>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control id="username" type="text" placeholder="Enter name" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
   
        )
    }
}