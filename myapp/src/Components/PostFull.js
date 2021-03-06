/* eslint-disable */
import React,{Component} from 'react'
import {connect} from 'react-redux';

class Test extends Component{
    render(){
        const post = this.props.post;
        return(
            <div key={ post }>
            <h1>{ post.title }</h1>
            <img src={post.img} />
            <p>{post.body}</p>
        </div>
    )
    }   
}

const mapStateToProps =(state, ownProps) => {
    let idpost  = ownProps.match.params.postId
    return{
        post: state.project.posts.find(post => post.id == idpost  )
    }

}

export default connect(mapStateToProps)(Test);