import React, { Component } from "react";

class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			hometown: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit() {
		this.props.store.dispatch({ type: "ADD_USER", user: this.state });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="username"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="hometown"
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default UserInput;
