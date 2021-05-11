import React from 'react'
import loadable from 'react-loadable'
import { Button } from 'antd'

const Loading = (props: any) => {
  if (props.error) {
    console.error(props.error)
    return <div>Error!{' '}<Button type="link" onClick={props.retry}>Retry</Button></div>
  }
  
  if (props.timedOut) {
    return <div>Timeout! <Button onClick={props.retry}>Retry</Button></div>
  }
  
  if (props.pastDelay) {
    return <div>Loading...</div>
  }

  return null
}

export default (path: string) => {
  return loadable({
    loader: () => import(`@/pages${path}`),
    loading: Loading,
    delay: 200,
    timeout: 10000,
  })
}
