/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
export default class Forum extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                  <h2>Forum</h2>
                  <p>gvdsgu saghvhs dshgsd sghhdv gdsds</p>
                </Jumbotron>
                <button><Route path="/forum/create" component={Forum}/>Create Forum</button>
            </Container>
   
        )
    }
}