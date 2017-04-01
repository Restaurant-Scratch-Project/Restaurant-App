import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';

class WaitPage extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <div>
               Current customer wait time is

               <h1>20 minutes</h1>
               
            </div>
        );
    }
}

export default WaitPage;