import React, { PureComponent } from 'react'
import { ReactSVG } from 'react-svg'
import { Button, DatePicker } from 'antd'

export default class Page extends PureComponent {
  render() {
    return (
      <div>
        <Button type="primary">this is Page~ </Button><br />
        <DatePicker.RangePicker />
        {/* <img src={require('@/images/photo.jpg')} alt="" srcSet="" /> */}
        {/* eslint-disable-next-line no-undef */}
        <div r-for={(item, index) in [1, 2, 3, 4]} key={index}>内容 {item + '-' + index}</div>
        <ReactSVG src={require('@/images/reject-icon.svg')} />
      </div>
    )
  }
}
