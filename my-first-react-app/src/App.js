import './App.css';
import './meyer_reset.css';

import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

export class App extends Component {
	constructor(props) {
		super(props);
		this.onClickBtn = this.onClickBtn.bind(this);
		this.state = {};
	}

	onClickBtn() {
		console.log('Button clicked');
	}

	render() {
		return (
			<div className="App">
				<MyComponent
					title="My First React App"
					onButtonClicked={this.onClickBtn}
				/>
			</div>
		);
	}
}

export default App;
