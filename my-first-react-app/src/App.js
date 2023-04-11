import './App.css';
import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<MyComponent title="My First React App" />
			</div>
		);
	}
}

export default App;
