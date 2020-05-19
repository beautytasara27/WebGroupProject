/* eslint-disable */
import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col, Button, Form} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {createArticle} from '../actions/projectActions'
import {connect} from 'react-redux'

class CreateArticle extends Component{
    
        constructor(props){
            super(props);
            this.state = {

                isVisible : true,
                title: "",
                content: ""
            
            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.dismiss = this.dismiss.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e){
            this.setState({[e.target.id]: e.target.value})
            
        }
        handleSubmit(e){
            e.preventDefault();
            this.dismiss()
            this.props.createArticle(this.state)
            
        }
        dismiss(){
            this.props.unMountMe();
        }
        render(){
        return(
            <Container>
                <Jumbotron>
                {this.state.isVisible === true}
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Title</Form.Label>
                    <Form.Control id="title" type="text" placeholder="Enter title" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Content</Form.Label>
                    <Form.Control id="content" type="textarea" placeholder="Content" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{color:"white"}} >Submit
                </Button>
                </Form>
                </Jumbotron>
            </Container>
   
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(createArticle(article))
    }
}
export default connect(null, mapDispatchToProps)(CreateArticle);