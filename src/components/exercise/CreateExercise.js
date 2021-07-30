import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Message from '../utils/Message'

export default class CreateExercise extends Component{

	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeRepetitions = this.onChangeRepetitions.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			description: '',
			repetitions: 0,
			date: new Date(),
			users: [],
			message: "",
			error: "",
		}
	}

	componentDidMount() {

		axios.get(process.env.REACT_APP_REST_URL + '/users/')
		.then(res => {

			if(res.data.length > 0) {
				this.setState({
					users: res.data.map(user => user.username),
					username: res.data[0].username,
				})

			}

			else {
				this.setState({
					users: ['test-user'],
					username: 'test',
				})
			}
		});

		if(this.props.match.params.id) {
			axios.get(process.env.REACT_APP_REST_URL + '/exercises/' +this.props.match.params.id)
			.then(res => {
				this.setState({
					username: res.data.username,
					description: res.data.description,
					repetitions: res.data.repetitions,
					date: new Date(res.data.date),
				})

			});
		}

	}
				

	onChangeUsername = e => {
		this.setState({
			username: e.target.value
		});
	}


	onChangeDescription = e => {
		this.setState({
			description: e.target.value
		});
	}


	onChangeRepetitions = e => {
		this.setState({
			repetitions: e.target.value
		});
	}

	onChangeDate = date => {
		this.setState({
			date: date
		});
	}

	onSubmit = e => {
		e.preventDefault();
		const exercise = {
			username: this.state.username,
			description: this.state.description,
			repetitions: this.state.repetitions,
			date: this.state.date,
		}

		console.log(exercise);

		if(this.props.match.params.id) {
			axios.post(process.env.REACT_APP_REST_URL + '/exercises/update/' +this.props.match.params.id, exercise)
			.then(res => 
				this.setState({
					message: res.data
				})				);
		}

		else {
			axios.post(process.env.REACT_APP_REST_URL + '/exercises/add/', exercise)
			.then(res => 
				this.setState({
					message: res.data
				})				);
		}

	}
 
 
	render() {
		const { users } = this.state;
		 if (!users)
		 	return <p>Loading</p>;
			return (
				<div className="container w-75"> 
				<Message message={this.state.message} type="success"></Message>
			<Message message={this.state.error} type="danger"></Message>
					<h3>{this.props.match.params.id? "Edit Session" : "Add a Session"}</h3>
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Username:</label>
							<select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
								{

									this.state.users.map(function(user) {
										return <option key={user} value={user}>{user}</option>
									})
								}
							</select>
						</div> 

						<div className="form-group">
							<label>Description:</label>
							<input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
						</div>

						<div className="form-group">
							<label>Repetitions (reps):</label>
							<input type="text" required className="form-control" value={this.state.repetitions} onChange={this.onChangeRepetitions}/>
						</div>


						<div className="form-group">
							<label>Date:</label> <br/>
							<DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
						</div>
						<br/>

						<div className="form-group">
							<input type="submit" value={this.props.match.params.id? "Update" : "Submit"} className="btn btn-primary"/>
						</div>

					</form>
				</div>
			)
	}
}