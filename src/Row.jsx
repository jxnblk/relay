
import React from 'react'
import { space } from './defaults'

class Row extends React.Component {
  
  render () {
    let styles = {
      container: {
        marginLeft: -space[2],
        marginRight: -space[2],
      },
      cf: {
        clear: 'both'
      }
    }
    return (
      <div style={styles.container}>
        {this.props.children}
        <div style={styles.cf} />
      </div>
    )
  }

}

export default Row

