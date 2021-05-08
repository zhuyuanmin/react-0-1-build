import React, { Component } from 'react'
import request from '@/utils/request'
import './index.css'
import style from './index.module.less'

export default class Home extends Component {
  componentDidMount() {
    // request('/api') // 开发代理演示
  }

  render() {
    return (
      <>
        <div className={style['page-box']}>
          <div>this is home~ CSS Modules 演示</div>
          <div className="content-box">no css modules</div>
        </div>
        <span className="content-box">no css modules</span>
      </>
    )
  }
}
