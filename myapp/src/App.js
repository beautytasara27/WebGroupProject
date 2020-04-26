import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Forum from './Components/Forum'
import Create from './Components/Create'
import NoMatch from './Components/NoMatch'
import NavBar from './Components/CustomNavBar'
import Footer from './Components/Footer'
import PostFull from './Components/PostFull';

class App extends Component{
  render (){
    return(
      <div>
        <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/forum" component={Forum}/>
          <Route path="/forum/create" component={Create}/>
          <Route path="/nomatch" component={NoMatch}/>
          <Route path="/PostFull/:postId" component={PostFull}/>
        </div>
        </Router>
        <Footer/>
      </div>
    )}

}

export default App;
