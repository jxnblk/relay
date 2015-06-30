
import React from 'react'
import { Arrange } from '..'

class ArrangeDemo extends React.Component {

  render () {
    return (
      <section>
        <h2>Arrange Demo</h2>
        <Arrange>
          <Arrange.Cell fill>
            <h4>Cell Fill</h4>
          </Arrange.Cell>
          <Arrange.Cell>
            <h4>Cell</h4>
          </Arrange.Cell>
          <Arrange.Cell>
            <h4>Cell</h4>
          </Arrange.Cell>
        </Arrange>
        <Arrange gutter>
          <Arrange.Cell middle gutter fill>
            <h4>Cell Fill</h4>
          </Arrange.Cell>
          <Arrange.Cell middle gutter>
            <h4>Cell</h4>
            <h4>Cell</h4>
          </Arrange.Cell>
          <Arrange.Cell middle gutter>
            <h4>Cell</h4>
          </Arrange.Cell>
        </Arrange>
      </section>
    )
  }

}

export default ArrangeDemo

