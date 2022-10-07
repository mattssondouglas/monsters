import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor() {
		super()

		this.state = {
			prospects : [],
			searchField: '',
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

	onSearchChange = (event) => {

		const searchField = event.target.value.toLocaleLowerCase()

		this.setState( () => {
			return { searchField }
		})
	}

		render() {

			const { prospects, searchField } = this.state;
			const { onSearchChange } = this;

			const filteredProspects = prospects.filter( (prospect) => {
				return prospect.name.toLocaleLowerCase().includes(searchField)
			})


			return (
				<div className='App'>
				<input type="search" className="search-box" placeholder="Search prospects..." onChange={onSearchChange}/>
				{filteredProspects.map((prospect) => {
					return (
						<div key={prospect.id}>
							<h1>{prospect.name}</h1>
						</div>
				)})}
				</div>
			)
		}}


export default App;
