import { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'
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
				<SearchBox onChangeHandler={onSearchChange} placeholder='Search prospects...' className="search-box"/>
				<CardList prospects={filteredProspects}/>
				</div>
			)
		}}


export default App;
