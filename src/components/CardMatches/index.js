import './index.css'

const categoryMatchesUrl = 'https://api.chucknorris.io/jokes/random?category='

const CardMatches = props => {
  const {todoDetails} = props
  const {category} = todoDetails

  const getcategoryMatches = async () => {
    const response = await fetch(`${categoryMatchesUrl}${category}`)
    const fetchedData = await response.json()
    const formattedData = fetchedData.map(team => ({
      value: team.value,
    }))
  }

  return (
    <div>
      <p>{value}</p>
    </div>
  )
}

export default CardMatches
