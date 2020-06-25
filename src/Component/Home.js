import React, { Component } from 'react'
import fire from '../config/fire'

export default class Home extends Component {
    
    logout=()=>{
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h2>This is Home page</h2>
                <button onClick={this.logout}>Log Out</button>
            </div>
        )
    }
}
