import React, { Component } from "react";
import Login from './Component/Login';
import Home from './Component/Home.js'
import fire from './config/fire'

// import Tweet from './Component/Tweet';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
          user:{}
      }
  }
 
  componentDidMount(){
    this.authListener(); 
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
     if(user){
        this.setState({user}) 
        localStorage.setItem("user",user.uid);
           }
     else{
         this.setState({user: null})
         localStorage.removeItem("user");
         }
      })
      }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
        {/* <Tweet /> */}
      </div>
    );
  }
}

export default App;


