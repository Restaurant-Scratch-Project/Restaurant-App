import React, { Component } from 'react';
import { render } from 'react-dom';

class SignUp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        <form onSubmit=''>
            <input type='text' placeholder='Enter restaurant name' ref='newName'></input>
            <input type='password' placeholder='Enter restaurant password' ref='newPassword'></input>
            <button>SignUp</button>
        </form>
        </div>
        )
    }
}
export default SignUp;