import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
      </ul>
    </div>
  )
}
