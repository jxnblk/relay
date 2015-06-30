
import React from 'react'
import { space } from './defaults'

class Media extends React.Component {

  render () {
    let style = {
      marginTop: space[2],
      marginBottom: space[2],
      // Bootstrap has overflow hidden - look into this
      //overflow: 'hidden'
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

class Img extends React.Component {

  render () {
    let style = {
      display: 'table-cell',
      paddingLeft: this.props.right ? space[2] : null,
      paddingRight: this.props.right ? null : space[2],
    }
    if (this.props.middle) {
      style.verticalAlign = 'middle'
    } else if (this.props.bottom) {
      style.verticalAlign = 'bottom'
    } else {
      style.verticalAlign = 'top'
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

Img.propTypes = {
  right: React.PropTypes.bool,
  middle: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
}

class Body extends React.Component {

  render () {
    let style = {
      display: 'table-cell',
      width: 99999
    }
    if (this.props.middle) {
      style.verticalAlign = 'middle'
    } else if (this.props.bottom) {
      style.verticalAlign = 'bottom'
    } else {
      style.verticalAlign = 'top'
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

Body.propTypes = {
  right: React.PropTypes.bool,
  middle: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
}

Media.Img = Img
Media.Body = Body

export default Media

