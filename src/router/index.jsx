import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './router.config'

function mapRoutes(routes) {
  return routes.map((item, index) => {
    const { exact = false, path, routes, redirect, component, ...rest } = item
    
    return (
      <Route exact={exact} path={path} key={index} render={props => {
        const NewComp = component
        const newProps = Object.assign(props, { redirect, ...rest })

        if (routes) {
          return <NewComp {...newProps}>{mapRoutes(routes)}</NewComp>
        }
        return redirect ? <Redirect to={redirect} /> : <NewComp {...newProps} />
      }} />
    )
  })
}

export default () => (
  <Switch>
    {mapRoutes(routes)}
    <Route component={() => (<div>404 Page not Found!</div>)} />
  </Switch>
)
