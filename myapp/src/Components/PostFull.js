/* eslint-disable */
import React,{Component} from 'react'
import {stories} from '../setup/data.js'
import {BrowserRouter as Router, Route, useParams} from 'react-router-dom'

const Test = ({match})=>(

    <div>
        {stories.map((post) => {
                if (match.params.postId==post.id){
                return <div key={post.id}>
                    <h1>{post.title}</h1>
                    <img src={post.img} />
                    <p>{post.body}</p>
                </div>
                }
            })}
            
    </div>
)

export default Test