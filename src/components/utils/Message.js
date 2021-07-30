import React, {Component} from 'react';


export default class Navabr extends Component{

	render() {

		const alertClass = "alert alert-"+this.props.type
		if(this.props.message) {
			return (
				<div className= {alertClass}>
					{this.props.message}
				</div>

			)
		}

		return (
			<div></div>
			)

		
	}
}