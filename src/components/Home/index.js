import {Component} from 'react'

import JokeCard from '../JokeCard'

import './index.css'

const JokeCategoryList = [
  {category: 'Animal'},
  {category: 'Career'},
  {category: 'Celebrity'},
  {category: 'Dev'},
  {category: 'Explicit'},
  {category: 'Fashion'},
  {category: 'Food'},
  {category: 'History'},
  {category: 'Money'},
  {category: 'Movie'},
  {category: 'Music'},
  {category: 'Political'},
  {category: 'Religion'},
  {category: 'Science'},
  {category: 'Sport'},
  {category: 'Travel'},
]

class Home extends Component {
  state = {
    categoryList: JokeCategoryList,
  }

  render() {
    const {categoryList} = this.state

    return (
      <div className="app-container">
        <div className="category-container">
          <h1 className="heading">Chuck Norries</h1>
          <ul className="category-list">
            {categoryList.map(eachTodo => (
              <JokeCard todoDetails={eachTodo} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
