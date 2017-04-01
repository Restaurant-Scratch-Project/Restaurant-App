import React, { Component } from 'react';
import { render } from 'react-dom';

class Restaurant extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        <form onSubmit=''>
            <button><a href="#restaurants">Restaurant</a></button>
        </form>
        </div>
        )
    }
}
export default Restaurant;