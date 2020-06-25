import React, { Component } from 'react'
import './Login.css';
import fire from '../config/fire';

export default class Login extends Component {

   constructor(props){
       super(props);
       this.login=this.login.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.signup=this.signup.bind(this);
           this.state={
               email: "",
               password: ""
       }
   }

   login(e){
       e.preventDefault();
       fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
           console.log(u);
       }) .catch((err)=>{
           console.log(err);
           alert(err.message);
       })
   }

   signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .catch((err)=>{
        console.log(err);
        alert(err.message);
    })
}


   handleChange(e){
       this.setState({
          [e.target.name] : e.target.value
       })
   } 

    signupHandler=(e)=>{
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
        
    }

    signinHandler=(e)=>{
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    render() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        return (
            <div>
                <h2>Login singup page</h2>
                <div>
                    <div className="container" id="container">
                        <div className="form-container sign-up-container">
                            <form action="#">
                                <h1>Create Account</h1>
                               <input type="text" id="name" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.handleChange} />
                                <input type="email" id="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange}/>
                                <input type="password" id="password" name="password" value={this.state.pass} placeholder="Enter Password" onChange={this.handleChange}/>
                                <button onClick={this.signup}>Sign Up</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form action="#">
                                <h1>Sign in</h1>
                                <input type="email" id="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange}/>
                                <input type="password" id="password" name="password" value={this.state.pass}  placeholder="Enter password" onChange={this.handleChange}/>
                                <a href="#">Forgot your password?</a>
                                <button onClick={this.login}>Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button class="ghost" id="signIn" onClick={this.signinHandler}>Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp" onClick={this.signupHandler}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
