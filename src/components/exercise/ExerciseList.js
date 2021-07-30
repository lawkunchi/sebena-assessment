import React, {Component} from 'react';
import axios from "axios";
import Exercise from './Exercise';


export default class ExerciseList extends Component{

	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);
		this.state = { exercises: []};
	}

	componentDidMount() {
		axios.get(process.env.REACT_APP_REST_URL + '/exercises/')
		.then(res => {
			this.setState({
				exercises: res.data
			})
		} )
		.catch((err) => {
			console.log(err);
		})
	}

	deleteExercise = id => {
		axios.delete(process.env.REACT_APP_REST_URL + '/exercises/' +id)
		.then(res => {
			this.setState({
				exercises: this.state.exercises.filter(el => el._id !== id)
			})
		} )
	}

	render() {

		return (
			<div className="container w-75 mx-auto">
				<h3>Workout Sessions</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>username</th>
							<th>Description</th>
							<th>Repetitions</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>

						{ this.state.exercises.map(currentExercise => {
                    return <Exercise  exercise={currentExercise} deleteExercise={this.deleteExercise}  key={currentExercise._id}/>
                })}
					</tbody>
				</table>
			</div>
		)
	}
}