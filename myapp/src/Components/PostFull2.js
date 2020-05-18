/* eslint-disable */
import React,{Component} from 'react'
import {connect} from 'react-redux';

class Test extends Component{
    render(){
        const post = this.props.post;
        return(
            <div key={post.id}>
            <h1>{post.title}</h1>
            <img src={post.img} />
            <p>{post.body}</p>
        </div>
    )
    }

    
}

const mapStateToProps =(state, ownProps) => {
    let id  = ownProps.match.params.postId;
    //    console.log(state.posts.find(post => post.id ===id))
    let posturl = state.posts.find(post => post.id === id);
    return{
        post: posturl
    }
//
}

export default connect(mapStateToProps)(Test);