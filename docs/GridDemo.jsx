
import React from 'react'
import { Row, Col } from '..'

class GridDemo extends React.Component {

  render () {
    return (
      <section>
        <h2>Grid Demo</h2>
        <Row>
          <Col width={4}>Col 4</Col>
          <Col width={4}>Col 4</Col>
          <Col width={4}>Col 4</Col>
        </Row>
      </section>
    )
  }

}

export default GridDemo

