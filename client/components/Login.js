import React, { Component } from 'react';
import { render } from 'react-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        <form onSubmit=''>
            <input type='text' placeholder='Enter restaurant name' ref='restName'></input>
            <input type='password' placeholder='Enter restaurant password' ref='restPassword'></input>
            <button><a href="#waitList">Login</a></button>
        </form>
        </div>
        )
    }
}
export default Login;