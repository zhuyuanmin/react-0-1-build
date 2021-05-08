import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@/utils/loadable'

// 路由
export default function RouteList() {
  return (
    <Switch>
      <Route exact path="/" component={loadable('/home')} />
      <Route path="/page" component={loadable('/page')} />
      <Route path="/counter" component={loadable('/counter')} />
      <Route component={() => <div>404 NotFound !</div>}/>
    </Switch>
  )
}
