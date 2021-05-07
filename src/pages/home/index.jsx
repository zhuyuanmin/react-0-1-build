import { Component } from 'react'
import request from '@/utils/request'
import './index.css'
import style from './index.module.less'

export default class Home extends Component {
  componentDidMount() {
    request('/api')
  }

  render() {
    return (
      <>
        <div className={style['page-box']}>
          <span>this is home~ 啊啊啊</span>
          <p className="content-box">no css modules</p>
        </div>
        <span className="content-box">no css modules</span>
      </>
    )
  }
}
