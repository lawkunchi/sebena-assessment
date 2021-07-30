import React, {Component} from 'react';
import { Link} from 'react-router-dom';


export default class Navabr extends Component{


	render() {

		return (
			<nav>
				<Link to="/">Home </Link>
				<Link to="/create">Create Exercise Log </Link>
				<Link to="/user">Create User</Link>
				<Link to="/users">Users</Link>
			</nav>
		)
	}
}