import React, { Component } from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'
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
import fire from './config/fire';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }
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
          {this.state.user ? (<Route exact path="/forum" component={Forum}/>): (this.history.push('/login'))}  
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
// n order to make use of history in the App component use it with withRouter. You need to make use of 
//withRouter only when your component is not receiving the Router props,
// This may happen in cases when your component is a nested child of a component rendered by the Router or you haven't 
//passed the Router props to it or when the component is not linked to the Router at all and is rendered 