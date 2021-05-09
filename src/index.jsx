import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider, Empty } from 'antd'
import App from './App'
import store from './redux/store'
import '@/utils/request'

import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'

ReactDom.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN} renderEmpty={Empty}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
