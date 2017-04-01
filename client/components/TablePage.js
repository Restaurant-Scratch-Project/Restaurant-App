import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';
import WaitList from './Transfers/Components/WaitList';


class TablePage extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <div>
               <WaitList/>
            </div>
        );
    }
}


export default TablePage;
