import {Link} from 'react-router-dom'

import './index.css'

const JokeCard = props => {
  const {todoDetails} = props
  const {category} = todoDetails

  return (
    <li className="category-item">
      <Link to={`/team-matches/${category}`} className="link">
        <h1 className="category-name">{category}</h1>
        <p className="tag-name">Unlimited Jokes On {category}</p>
      </Link>
    </li>
  )
}

export default JokeCard
