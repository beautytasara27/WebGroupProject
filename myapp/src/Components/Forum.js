/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'
import Create from './Create';

export default class Forum extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewForm : false,
            renderCreate : true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCreateUnmount = this.handleCreateUnmount.bind(this);
      //  this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        return(
            this.setState({viewForm : true})
        )
    }
    handleCreateUnmount(){
        this.setState({renderCreate : false});
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.renderCreate !==true){
    //         return true;
    //     }
    //     return false;
    // }
    render(){
        return(
            <Container>
                <Jumbotron>
                  <h2>Forum</h2>
                  <p>gvdsgu saghvhs dshgsd sghhdv gdsds</p>
                </Jumbotron>
                <button onClick={this.handleClick}>Create Forum</button>
                {this.state.renderCreate && this.state.viewForm ?  <Create unMountMe = {this.handleCreateUnmount}/> : null}
                
            </Container>
   
        )
    }
}