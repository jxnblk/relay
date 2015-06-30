
import React from 'react'
import { space } from './defaults'

class Col extends React.Component {

  render () {
    let style = {
      float: this.props.right ? 'right' : 'left',
      boxSizing: 'border-box',
      width: (this.props.width * 100 / 12) + '%',
      paddingLeft: space[2], 
      paddingRight: space[2], 
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

Col.propTypes = {
  right: React.PropTypes.bool,
  width: React.PropTypes.number,
}

export default Col

