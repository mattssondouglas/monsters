import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor() {
		super()

		this.state = {
			monsters : [
				{
					name: 'Douglas',
				},
				{
					name: 'Andree',
				},
				{
					name: 'Ida',
				},
				{
					name: 'Johan',
				},
				{
					name: 'Marianne',
				},
			]
		}
	}

		render() {
			return (
				<div className='App'>
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.name}>{monster.name}</h1>
				})}
				</div>
			)
		}
	}


export default App;
