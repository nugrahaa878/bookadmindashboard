import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from './routes'

export default function App() {

  const pages = routes.map((route, index) => {
    return(
      <Route
        component={route.component}
        exact={route.exact}
        path={route.path}
        key={index}
      />
    )
  })

  return (
    <Fragment>
      <Switch>
        {pages}
        <Redirect to='/' />
      </Switch>
    </Fragment>
  )
}
