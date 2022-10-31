// Component for results, currently formatted as cards in list.

import { Component } from 'react'
import Card from '../card/card.component.jsx'
import './card-list.styles.css'

class CardList extends Component {
	render() {
		const {prospects} = this.props

		return (
			<div className='card-list'>
			{prospects.map(prospect => {
				const {name, email, id} = prospect
				return (
					<Card prospect={prospect} />
			)}
		)}
			</div>
		)
	}
}

export default CardList;
