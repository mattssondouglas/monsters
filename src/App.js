import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor() {
		super()
		this.state = {
			name: {firstName:'Douglas', lastName: 'Mattsson'},
			city: 'Malaga'
		}
	}

	render() {
		return (
			<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Hello {this.state.name.firstName}, you live in {this.state.city}
			</p>
			<button onClick={() => {
				this.setState({ name: {firstName: 'Mattsson'}})
			}}>Change name</button>
			</header>
			</div>
		);
	}
}

export default App;
