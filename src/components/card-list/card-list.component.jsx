import Card from '../card/card.component.jsx'
import './card-list.styles.css'

const CardList = ({prospects}) => (
		<div className='card-list'>
			{prospects.map((prospect) => {
				return <Card prospect={prospect} />
			})}
		</div>
)

export default CardList;