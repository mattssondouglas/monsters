import {useState} from 'react'

import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState('') // [value, setValue]
	const [prospects, setProspects] = useState([])

	fetch('https://jsonplaceholder.typicode.com/users')
	.then((res) => res.json())
	.then((users) => setProspects(users)
	)

	const onSearchChange =  (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchField(searchFieldString)
	}

	const filteredProspects = prospects.filter( (prospect) => {
		return prospect.name.toLocaleLowerCase().includes(searchField)
	})

	return (
		<div className='App'>
		<h1 className='app-title'>Prospect Finder</h1>
		<SearchBox onChangeHandler={onSearchChange} placeholder='Search prospects...' className="prospects-search-box"/>
		<CardList prospects={filteredProspects}/>
		</div>
	)
}

// class App extends Component {

// 	constructor() {
// 		super()

// 		this.state = {
// 			prospects : [],
// 			searchField: '',
// 		}
// 	}

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then((res) => res.json())
	// 		.then((users) =>
	// 			this.setState(
	// 				() => {
	// 					return { prospects: users }
	// 		},
	// 		() => {

	// 		}
	// 	)
	// )
// 	}

// 	onSearchChange = (event) => {

// 		const searchField = event.target.value.toLocaleLowerCase()

// 		this.setState( () => {
// 			return { searchField }
// 		})
// 	}

// 		render() {

// 			const { prospects, searchField } = this.state;
// 			const { onSearchChange } = this;

// 			const filteredProspects = prospects.filter( (prospect) => {
// 				return prospect.name.toLocaleLowerCase().includes(searchField)
// 			})


// 			return (
// 				<div className='App'>
// 				<h1 className='app-title'>Prospect Finder</h1>
// 				<SearchBox onChangeHandler={onSearchChange} placeholder='Search prospects...' className="prospects-search-box"/>
// 				<CardList prospects={filteredProspects}/>
// 				</div>
// 			)
// 		}}


export default App;
