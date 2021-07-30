import React, {Component} from 'react';
import { Link} from 'react-router-dom';

export default class User extends Component{

	render() {

		const {user, deleteUser} = this.props

		return (
				<tr>
					<td>{user._id}</td>
					<td>{user.username}</td>
					<td>
						<Link to = {"/edit/user/"+user._id}> Edit</Link> | <Link to="#" onClick={() => {deleteUser(user._id)}}>Delete</Link>
					</td>
				</tr>
		)
	}
}