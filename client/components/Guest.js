import React, { Component } from 'react';
import { render } from 'react-dom';

class Guest extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        <form onSubmit=''>
            <button><a href="#guestOptions">Guest</a></button>
        </form>
        </div>
        )
    }
}
export default Guest;