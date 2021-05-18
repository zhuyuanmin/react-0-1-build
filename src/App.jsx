import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterList from './router'

export default () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/counter">计数</Link></li>
        <li><Link to="/detail">详情</Link></li>
      </ul>
    </div>
    <RouterList />
  </Router>
)
