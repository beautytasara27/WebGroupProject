/* eslint-disable */
import React ,{Component} from 'react'
import {stories} from '../setup/data.js'
import PostFull from './PostFull.js'
import {Route} from 'react-router-dom'
import {BrowserRouter, Link, Switch} from 'react-router-dom'

export default class Home extends Component{

    render(){
      const postList = stories.map(post =>{
        return(
            
            <li key={post.id}>
                <div>
                    <Link to={"/PostFull/"+post.id }><h1>{post.title}</h1></Link>
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
