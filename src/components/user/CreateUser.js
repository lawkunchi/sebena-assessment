import React, {Component} from 'react';
import axios from "axios";

export default class CreateUser extends Component {

	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
		}
	}

	componentDidMount() {

		if(this.props.match.params.id) {
			axios.get(process.env.REACT_APP_REST_URL + '/users/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					username: res.data.username
				})
			} )
			.catch((err) => {
				console.log(err);
			})
		}
		
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.state.username
		}

		if(this.props.match.params.id) {
			axios.post(process.env.REACT_APP_REST_URL + '/users/update/'+this.props.match.params.id, user)
			.then(res => console.log(res.data));
		}

		else {
			axios.post(process.env.REACT_APP_REST_URL + '/users/add', user)
			.then(res => console.log(res.data));
		}
		
	}

	render() {

		return (
			<div className="container w-75"> 
				<h3>{this.props.match.params.id? "Edit User" : "Create User"}</h3>
				<form onSubmit={this.onSubmit}>
					

					<div className="form-group">
						<label>Username:</label>
						<input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
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