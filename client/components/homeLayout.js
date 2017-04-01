import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';
import Guest from './Guest';
import Restaurant from './Restaurant';

class homeLayout extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <div>
               <Guest/>
               <Restaurant/>
            </div>
        );
    }
}


export default homeLayout;
