
import React from 'react'
import { space } from './defaults'

class Arrange extends React.Component {

  render () {
    let style = {
      display: 'table',
      boxSizing: 'border-box',
      minWidth: '100%',
      tableLayout: this.props.fixed ? 'fixed' : null,
      marginLeft: this.props.gutter ? -space[2] : null,
      marginRight: this.props.gutter ? -space[2] : null,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

class Cell extends React.Component {

  render () {
    let style = {
      display: 'table-cell',
      width: this.props.fill ? '100%' : null,
      paddingLeft: this.props.gutter ? space[2] : null,
      paddingRight: this.props.gutter ? space[2] : null,
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

Arrange.Cell = Cell

export default Arrange

