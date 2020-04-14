/* eslint-disable */
import React,{Component} from 'react'
import {stories} from '../setup/data.js'

export default class PostFull extends Component{

    render(){
        return(
           <div>
            {stories.map((post) => {
                if (this.props.id==post.id){
                return <div>
                    <h1>{post.title}</h1>
                    <img src={post.img} />
                    <p>{post.body}</p>
                </div>
                }
            })}
            <h1>beauty</h1>
            </div>
        );
    }
        
    
}
