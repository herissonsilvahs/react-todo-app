import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Todo from '../components/todo/Todo'
import Other from '../components/other/Other'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Todo } />
      <Route path="/other" exact component={ Other } />
    </Switch>
  </BrowserRouter>
)