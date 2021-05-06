import { Route, Switch } from 'react-router-dom'

// 引入页面
import Home from '../pages/home'
import Page from '../pages/page'

// 路由
const getRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/page" component={Page} />
  </Switch>
)

export default getRouter
