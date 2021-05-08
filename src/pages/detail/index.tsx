import React from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'

export default (props: any) => {
  const { children, redirect } = props

  return (
    <div>
      <div>React-router 子路由展示</div>
      <ul>
        <li><Link to="/detail">detail A</Link></li>
        <li><Link to="/detail/b">detail B</Link></li>
      </ul>

      <Switch>
        {children}
        <Redirect r-show={redirect} to={redirect} />
        <Route component={() => (<div>404 Page not Found!</div>)} />
      </Switch>
    </div>
  )
}
