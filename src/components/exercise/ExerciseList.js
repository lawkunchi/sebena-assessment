import React, {Component} from 'react';
import axios from "axios";
import Exercise from './Exercise';
import Message from '../utils/Message'

export default class ExerciseList extends Component{

	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);
		this.state = { 
			exercises: [],
			message: "",
			error: ""
		};
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
				exercises: this.state.exercises.filter(el => el._id !== id),
				message: res.data
			})
		} )
	}

	render() {

		return (
			<div className="container w-75 mx-auto">
			<Message message={this.state.message} type="success"></Message>
			<Message message={this.state.error} type="danger"></Message>
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