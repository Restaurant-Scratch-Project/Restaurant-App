import React, { Component } from 'react';
import AddName from './add-list';
import ListOfNames from './list-of-names';
import _ from 'lodash';
// import Axios from 'axios';

const waitlist = [
	{
		patron: 'Jennifer Simpson',
		cell: '456-4545'
	},
	{
		patron: 'Jason Rodgers',
		cell: '753-9543'
	}
];

const config = {
	headers: {
		'Content-Type': 'application/json'
	}
}
class WaitList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			waitlist
		};
	}

	//add getInitialState of list of customers signed up from database.

	render() {
		return ( 
			<div className = "container">
				<h1>Add Your Name to Our Waitlist</h1>
				<AddName waitlist={this.state.waitlist} addToList={this.addToList.bind(this)} />
				<ListOfNames waitlist={this.state.waitlist} deletePatron={this.deletePatron.bind(this)}/>			
			</div>
		);
	}

	addToList(patron, cell) {
		console.log('this the patron', patron);
		this.state.waitlist.push({
			patron,
			cell
		});
		this.setState({ waitlist: this.state.waitlist });

		const newRequest = new XMLHttpRequest();
		newRequest.open('Post',  'http://localhost:3000/users');
		newRequest.setRequestHeader('Content-Type', 'application/json');
		newRequest.onload = function(){
			if (newRequest.readyState == 4 && newRequest.status == 200) {
				console.log(newRequest.responseText);
        	}
		}
		newRequest.send(JSON.stringify({name: patron, cell: cell}));
	}

	deletePatron(patronToDelete) {
		_.remove(this.state.waitlist, waitlist => waitlist.patron === patronToDelete);
        this.setState({ waitlist: this.state.waitlist });

		const newRequest = new XMLHttpRequest();
		newRequest.open('Post',  'http://localhost:3000/removeOne');
		newRequest.setRequestHeader('Content-Type', 'application/json');
		newRequest.onload = function(){
			if (newRequest.readyState == 4 && newRequest.status == 200) {
				console.log(newRequest.responseText);
        	}
		}
		newRequest.send(JSON.stringify({name: patron, cell: cell}));

	 	}
}

export default WaitList;
