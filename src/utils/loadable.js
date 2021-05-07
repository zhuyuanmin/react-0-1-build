import loadable from 'react-loadable'

const Loading = props => {
  if (props.error) {
    console.info(props.error)
    return <div>Error!{' '}<button type="link" onClick={props.retry}>Retry</button></div>
  }
  
  if (props.timedOut) {
    return <div>Timeout! <button onClick={props.retry}>Retry</button></div>
  }
  
  if (props.pastDelay) {
    return <div>Loading...</div>
  }

  return null
}

export default path => {
  return loadable({
    loader: () => import(`@/pages${path}`),
    loading: Loading,
    delay: 200,
    timeout: 10000,
  })
}
