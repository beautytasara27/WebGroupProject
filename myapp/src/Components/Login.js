/* eslint-disable */
/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron,Form, Container, Row, Col, Button} from 'react-bootstrap'
import { BrowserRouter as Route ,Redirect} from 'react-router-dom'
import {users} from '../setup/data'
import fire from '../config/fire'
export default class Login extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
        password:'',
        email:'',
        isloggedIn: false
      }
    }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      signup(e){
        e.preventDefault();
        return(this.props.history.push('/signup'));
      }
      // redirect(){
      //   if (this.state.isloggedIn){
      //     console.log(this.state.isloggedIn)
      //   return(this.props.history.push('/forum'));
      //   //<Redirect to={{pathname: '/', state: {from: this.props.location}}}/>
      //   }
      //   else{
      //     console.log("didnt");
      //     return null;
      //   }
    //  }
      handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
          console.log(u)
          this.setState({isloggedIn:true})
          if (this.state.isloggedIn){
            console.log(this.state.isloggedIn)
          return(this.props.history.push('/forum'));
          //<Redirect to={{pathname: '/', state: {from: this.props.location}}}/>
          }
          else{
            console.log("didnt");
            return null;
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    
      findUser = () => {
        {users.map((user) => {
            
                if (this.state.username == user.username){
                     this.state.found ==true
                }
            })}
            
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
                    <Form.Control id="email" type="text" placeholder="Enter email" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{color:"white"}} >Login
                </Button>
                <Button variant="primary" style={{color:"white"}} onClick={this.signup}>Signup
                </Button>
                </Form>
            </Container>
   
        )
    }
}
