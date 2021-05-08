import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './router.config'

function mapRoutes(routes) {
  return routes.map((item, index) => (
    <Route exact={item.exact || false} path={item.path} key={index} render={props => {
      const NewComp = item.component
      Object.assign(props, {
        redirect: item.redirect || null,
        permission: item.permission || []
      })
      if (item.routes) {
        return <NewComp {...props}>{mapRoutes(item.routes)}</NewComp>
      }
      return props.redirect ? <Redirect to={props.redirect} /> : <NewComp {...props} />
    }} />
  ))
}

export default () => (
  <Switch>
    {mapRoutes(routes)}
    <Route component={() => (<div>404 Page not Found!</div>)} />
  </Switch>
)
