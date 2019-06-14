import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/index.redux'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import Tab from '../components/Tab'
import Tab2 from '../components/Tab2'
import Tab3 from '../components/Tab3'

const routes = [
  {
    path: '/home',
    compontent: Home,
    children: [
      { path: '/tab', compontent: Tab },
      { path: '/tab2', compontent: Tab2 },
      { path: '/tab3', compontent: Tab3 }
    ]
  },
  { path: '/about', compontent: About },
  { path: '/detail/:id', compontent: Detail },
  { path: '/Login', compontent: Login }
]

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(router => {
            return (
              <Route path={router.path} render={
                (props) => router.compontent
                  ? <router.compontent>
                    {
                      router.children && router.children.map(child => {
                        return (
                          <Route path={router.path + child.path} render={
                            ({ match }) => match.path === '/home'
                            ? <Redirect to="/home/tab" />
                            : <child.compontent />
                          } key={router.path + child.path} />
                        )
                      })
                    }
                  </router.compontent>
                  : <h3> {props} </h3>
              } key={router.path}></Route>              
            )
          })}
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => <Page404 />}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
