import { Link, Redirect, Route, Switch } from 'react-router-dom'

export default props => (
  <div>
    <li>
      <Link to="/detail">detail A</Link>
    </li>
    <li>
      <Link to="/detail/b">detail B</Link>
    </li>

    <Switch>
      {props.children}
      {props.redirect && <Redirect to={props.redirect} />}
      <Route component={() => (<div>404 Page not Found!</div>)} />
    </Switch>
  </div>
)
