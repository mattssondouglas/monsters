// Component for results, currently formatted as cards in list.

import { Component } from 'react'

class CardList extends Component {
	render() {
		const {prospects} = this.props

		return (
			<div>
			{prospects.map(prospect => (
					<div>
						<h1 key={prospect.id}>{prospect.name}</h1>
					</div>
			)
		)}
			</div>
		)
	}
}

export default CardList;
