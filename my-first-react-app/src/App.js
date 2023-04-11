import './App.css';
//import './meyer_reset.css';

import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import CountUp from './components/CountUp';
import NavBar from './components/NavBar';
import Forum from './components/Forum';

export class App extends Component {
	constructor(props) {
		super(props);
		this.onClickBtn = this.onClickBtn.bind(this);
		this.state = {
			count: 0,
			username: 'David',
		};
		this.countUp = this.countUp.bind(this);
	}

	countUp() {
		this.setState({
			count: this.state.count + 1,
		});
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
				<CountUp
					title="Counting Up"
					count={this.state.count}
					onButtonClicked={this.countUp}
				/>
				<NavBar username={this.state.username} />
				<Forum username={this.state.username} />
			</div>
		);
	}
}

export default App;
