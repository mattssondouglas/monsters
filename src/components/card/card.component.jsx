import './card.styles.css'

const Card = ({prospect}) => {
	const {id,name,email} = prospect
	return (
	<div className='card-container' key={id}>
		<img alt={`prospect ${name}`} src={`https://robohash.org/${id}?set=set5&size=150x150`}/>
		<h2>{name}</h2>
		<p>{email}</p>
	</div>
)}

export default Card