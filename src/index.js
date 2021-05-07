import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider, Empty } from 'antd'
import Nav from './components/Nav'
import getRouter from './router'
import store from './redux/store'
import '@/utils/request'

import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'

ReactDom.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN} renderEmpty={Empty}>
      <Router>
        <Nav />
        {getRouter()}
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
