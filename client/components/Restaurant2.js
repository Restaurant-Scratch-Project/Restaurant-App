import React, { Component } from 'react';
import { render } from 'react-dom';

class Restaurant2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        <form onSubmit=''>
            <button><a href="#guestWait">Restaurnat 2</a></button>
        </form>
        </div>
        )
    }
}
export default Restaurant2;