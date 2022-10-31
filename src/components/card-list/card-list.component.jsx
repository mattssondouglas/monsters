// Component for results, currently formatted as cards in list.

import { Component } from 'react'

class CardList extends Component {
	render() {
		const {prospects} = this.props

		return (
			<div className='card-list'>
			{prospects.map(prospect => (
					<div className='card-container' key={prospect.id}>
						<img alt={`prospect ${prospect.name}`} src={`https://robohash.org/${prospect.id}?set=set5&size=150x150`}/>
						<h2>{prospect.name}</h2>
						<p>{prospect.email}</p>
					</div>
			)
		)}
			</div>
		)
	}
}

export default CardList;
