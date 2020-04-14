/* eslint-disable */
import React ,{Component} from 'react'
import {stories} from '../setup/data.js'
import PostFull from './PostFull.js'

export default class Home extends Component{
    handleClick(data) {
       // alert(data);
      <PostFull id={data.id}/>;
    }
    render(){
      const postList = stories.map(post =>{
        return(
            <li key={post.id}>
                <div>
                    <button onClick={this.handleClick.bind(this,post)}><h1>{post.title}</h1></button>
                    <img src={post.img} />
                    <p>{post.body}</p>
                </div>
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
