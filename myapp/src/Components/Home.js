/* eslint-disable */
import React ,{Component} from 'react'
import {stories} from '../setup/data.js'
import PostFull from './PostFull.js'
import {Route} from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import {BrowserRouter, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
class Home extends Component{

    render(){
      const {posts} = this.props;
      const postList = posts.map(post =>{
        return(
            <li key={post.id}>
                <Container>
                    <Row>
                        <Col sm={4}><img src={post.img} /></Col>
                        <Col sm={8}>
                        <div>
                        <Link to={"/PostFull/"+post.id }><h1>{post.title}</h1></Link>
                        <p>{post.body}
                        </p>
                    </div></Col>
                    </Row>
                </Container>

            </li>
            
        )
    })
    return(
        <div>
            <ul>{postList}</ul>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.project.posts
    }
  }

export default  connect(mapStateToProps) (Home);