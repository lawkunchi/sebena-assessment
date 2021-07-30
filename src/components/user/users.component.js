import {useSelector} from 'react-redux'
import User from './user.component'


const Users = () => {

	const users = useSelector((state)  => state.users);

	return (
			<table className="table">
				<thead>
					<tr>
						<th>id</th>
						<th>username</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{users.map((user) => (
						 <User  user={user}  key={user._id}/>
						))}

				</tbody>
			</table>
		)
}


export default Users;