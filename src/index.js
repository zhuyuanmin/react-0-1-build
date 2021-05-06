import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import getRouter from './router'

ReactDom.render(
  <Router>
    <Nav />,
    {getRouter()}
  </Router>,
  document.getElementById('root')
)
