import React, {Component} from 'react';
import { Link} from 'react-router-dom';

export default class User extends Component{

	render() {

		const {user} = this.props

		return (
				<tr>
					<td>{user.username}</td>
					<td>{user.sds}</td>
				</tr>
		)
	}
}