import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor() {
		super()

		this.state = {
			prospects : []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) =>
				this.setState(
					() => {
						return { prospects: users }
			},
			() => {
				console.log(this.state)
			}
		)
	)
	}

		render() {
			return (
				<div className='App'>
				<input type="search" className="search-box" placeholder="Search prospects..." onChange={(event) => {
					console.log(event.target.value);

					const searchString = event.target.value.toLocaleLowerCase()
					const filteredProspects = this.state.prospects.filter( (prospect) => {
						return prospect.name.toLocaleLowerCase().includes(searchString)
					})
					this.setState( () => {
						return { prospects : filteredProspects}
					})
				}}/>
				{this.state.prospects.map((prospect) => {
					return (
						<div key={prospect.id}>
							<h1>{prospect.name}</h1>
						</div>
				)})}
				</div>
			)
		}
	}


export default App;
