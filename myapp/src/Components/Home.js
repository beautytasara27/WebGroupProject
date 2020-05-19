/* eslint-disable */
import React ,{Component} from 'react'
import { Row, Col, Container, Jumbotron } from 'react-bootstrap'
import {BrowserRouter, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import CreateArticle from './CreateArticle'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewForm : false,
            renderCreateArticle : true
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleCreateArticleUnmount = this.handleCreateArticleUnmount.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        return(
            this.setState({viewForm : true})
        )
    }
    handleCreateArticleUnmount(){
        this.setState({renderCreateArticle : false});
    }
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
            <Jumbotron>
                <h2>Add article</h2>
                <button onClick={this.handleClick}>Add article</button>
                {this.state.renderCreateArticle && this.state.viewForm ?  <CreateArticle unMountMe = {this.handleCreateArticleUnmount}/> : null}
            </Jumbotron>
            <div>
                <ul>{postList}</ul>
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        posts: state.project.posts
    }
  }

export default compose(connect(mapStateToProps),
firestoreConnect([{collection: 'Articles'}])) (Home);
//compose different higher order components together