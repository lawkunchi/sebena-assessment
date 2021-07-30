import React, {Component} from 'react';
import { Link} from 'react-router-dom';

export default class Exercise extends Component{

	render() {

		const {exercise, deleteExercise} = this.props

		return (
				<tr>
					<td>{exercise.username}</td>
					<td>{exercise.description}</td>
					<td>{exercise.duration}</td>
					<td>{exercise.date.substring(0,10)}</td>
					<td>
						<Link to = {"/edit/"+exercise._id}> edit</Link> | <Link to="#" onClick={() => {deleteExercise(exercise._id)}}>Delete</Link>
					</td>
				</tr>
		)
	}
}