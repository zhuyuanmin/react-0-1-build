import { PureComponent } from 'react'

const aa = () => '王八蛋'

export default class Page extends PureComponent {
  render() {
    return <div>this is Page~ 呵呵哒答 {aa()}</div>
  }
}
