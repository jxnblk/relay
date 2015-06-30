
import React from 'react'
import { space, maxWidth } from './defaults'

class Container extends React.Component {

  render () {
    let style = {
      paddingLeft: space[3],
      paddingRight: space[3],
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: this.props.fluid ? null : maxWidth,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

Container.propTypes = {
  fluid: React.PropTypes.bool
}

export default Container

