import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';
import Restaurant1 from './Restaurant1';
import Restaurant2 from './Restaurant2';

class GuestOptions extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <div>
                These are the restaurants available
               <Restaurant1/>
               <Restaurant2/>
            </div>
        );
    }
}

export default GuestOptions;