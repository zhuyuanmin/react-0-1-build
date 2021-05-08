import { Link, Redirect, Route, Switch } from 'react-router-dom'

export default props => {
  const { children, redirect } = props

  return (
    <div>
      <li>
        <Link to="/detail">detail A</Link>
      </li>
      <li>
        <Link to="/detail/b">detail B</Link>
      </li>

      <Switch>
        {children}
        <Redirect r-show={redirect} to={redirect} />
        <Route component={() => (<div>404 Page not Found!</div>)} />
      </Switch>
    </div>
  )
}
