import React, { Component } from 'react';

class MyComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const { title, onButtonClicked } = this.props;
		return (
			<div>
				<h1>{title}</h1>
				<button onClick={onButtonClicked}>Click Me</button>
			</div>
		);
	}
}

export default MyComponent;
