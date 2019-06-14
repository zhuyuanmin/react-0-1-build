import React from 'react'
import { connect } from 'react-redux'

export default connect()(function Home(props) {
    return (
        <div>
            这是Home页面
            { props.children }
        </div>
    )
})
