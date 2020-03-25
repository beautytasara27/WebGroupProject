import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Forum from './Components/Forum'
import Create from './Components/Create'
import NoMatch from './Components/NoMatch'
import NavBar from './Components/CustomNavBar'

class App extends Component{
  render (){
    return(
      <Router>
      <div>
        <NavBar/>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/forum" component={Forum}/>
        <Route path="/forum/create" component={Create}/>
        <Route path="/nomatch" component={NoMatch}/>
      </div>
    </Router>
    )}

}

export default App;
