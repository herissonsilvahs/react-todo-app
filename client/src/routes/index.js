import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../components/App'
import Todo from '../components/todo/Todo'
import Other from '../components/other/Other'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ Todo } />
      <Route path="/other" exact component={ Other } />
    </Switch>
  </BrowserRouter>
)