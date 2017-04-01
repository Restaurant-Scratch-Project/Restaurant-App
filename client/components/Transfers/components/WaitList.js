import React, { Component } from 'react';
import AddName from './add-list';
import ListOfNames from './list-of-names';
import _ from 'lodash';
import Axios from 'axios';

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
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}
class WaitList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			waitlist
		};
	}

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
		this.state.waitlist.push({
			patron,
			cell
		});
		this.setState({ waitlist: this.state.waitlist });

		fetch({
			method: 'post',
			url: 'http://localhost:3000/users',
			body: {
				name: patron,
				cell: cell
    		}
		}).then(res => {
      		console.log(res);
		}).catch((err) => {
			console.log('testing', err);
		})
	}

	deletePatron(patronToDelete) {
		_.remove(this.state.waitlist, waitlist => waitlist.patron === patronToDelete);
        this.setState({ waitlist: this.state.waitlist });

	// 	Axios.get('/removeOne', {
  //     name: this.state.waitlist.patron,
  //     cell: this.state.waitlist.cell
  //   }).then(res => {
  //     console.log(res);
  //   })

	 }
}

export default WaitList;
