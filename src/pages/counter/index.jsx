import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset, incrementAsync } from '@/redux/actions/counter'

class Counter extends PureComponent {
  render() {
    return (
      <div>
        <div>this is counter~ redux 功能演示</div>
        <div>当前计数为{this.props.count}</div>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.incrementAsync()}>自增异步</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    )
  }
}

export default connect(
  state => state.counter,
  { increment, decrement, reset, incrementAsync }
)(Counter)
