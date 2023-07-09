import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import CardMatches from './components/CardMatches'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/card-matches/:category" component={CardMatches} />
  </Switch>
)

export default App
