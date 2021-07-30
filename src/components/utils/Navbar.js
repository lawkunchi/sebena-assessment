import React, {Component} from 'react';
import { Link} from 'react-router-dom';


export default class Navabr extends Component{


	render() {

		return (
			<nav className= "navbar navbar-dark navbar-expand-lg bg-dark">
				<Link to="/" className="navbar-brand">Workout Sessions </Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
				
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link className="nav-link" to="/create">Add Session </Link>
						</li>

						<li className="navbar-item">
							<Link className="nav-link" to="/user">Add User</Link>
						</li>

						<li className="navbar-item">
							<Link className="nav-link" to="/users">Users</Link>
						</li>
					</ul>
				</div>
			</nav>

		)
	}
}