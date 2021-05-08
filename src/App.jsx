import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterList from './router'

export default () => {
  return (
    <Router>
      <div>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/counter">记数</Link>
        </li>
        <li>
          <Link to="/detail">详情</Link>
        </li>
      </div>
      <RouterList />
    </Router>
  )
}
