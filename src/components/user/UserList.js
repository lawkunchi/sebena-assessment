import React, {Component} from 'react';
import axios from "axios";
import User from './User';
import Message from '../utils/Message'

export default class UserList extends Component{

	constructor(props) {
		super(props);

		this.deleteUser = this.deleteUser.bind(this);
		this.state = { 
			users: [],
			message: "",
			error: "",
		};

	}

	componentDidMount() {
		axios.get(process.env.REACT_APP_REST_URL + "/users")
		.then(res => {
			this.setState({
				users: res.data,
			})
		} )
		.catch((err) => {
			console.log(err);
		})

		console.log(this.state.message);
	}

	deleteUser = id => {
		axios.delete(process.env.REACT_APP_REST_URL + '/users/' +id)
		.then(res => {
			this.setState({
				users: this.state.users.filter(el => el._id !== id),
				message: res.data
			})
		} )
	}

	render() {

		return (
			<div className="container w-75">
				<Message message={this.state.message} type="success"></Message>
				<Message message={this.state.error} type="danger"></Message>
				<h3>User List</h3>
				<table className="table">
					<thead>
						<tr>
							<th>id</th>
							<th>username</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>

						{ this.state.users.map(user => {
                    return <User  user={user} deleteUser={this.deleteUser}  key={user._id}/>
                })}
					</tbody>
				</table>
			</div>
		)
	}
}