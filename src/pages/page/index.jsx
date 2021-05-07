import { PureComponent } from 'react'
import { ReactSVG } from 'react-svg'

const aa = () => '王八蛋'

export default class Page extends PureComponent {
  render() {
    return (
      <div>
        this is Page~ 呵呵 {aa()}
        {/* <img src={require('@/images/photo.jpg')} alt="" srcSet="" /> */}
        <ReactSVG src={require('@/images/reject-icon.svg')} />
      </div>
    )
  }
}
