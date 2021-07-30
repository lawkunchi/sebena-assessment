import React, {Component} from 'react';
import axios from "axios";
import Exercise from './exercise.component';


export default class ExerciseList extends Component{

	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);
		this.state = { exercises: []};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/exercises/')
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
		axios.delete('http://localhost:5000/exercises/'+id)
		.then(res => {
			this.setState({
				exercises: this.state.exercises.filter(el => el._id !== id)
			})
		} )
	}

	render() {

		return (
			<div>
				<h3>ExerciseList</h3>
				<table className="table">
					<thead>
						<tr>
							<th>username</th>
							<th>Description</th>
							<th>Duration</th>
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