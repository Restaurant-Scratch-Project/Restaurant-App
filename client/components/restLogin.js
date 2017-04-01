import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

class restLogin extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <div>
               Restaurant Login
               <Login/>
               Restaurant SignUp
               <SignUp/>
            </div>
        );
    }
}

export default restLogin;