
import React from 'react'
import css from './base.css'
import {
  Container,
  Row,
  Col,
  Media
} from '..'
import GridDemo from './GridDemo.jsx'
import MediaDemo from './MediaDemo.jsx'
import ArrangeDemo from './ArrangeDemo.jsx'

class Root extends React.Component {

  render () {
    let styles = {
      body: {
        fontFamily: 'sans-serif'
      }
    }
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body style={styles.body}
          className='outline'>
          <Container fluid>
            <h1>relay</h1>
            <GridDemo />
            <MediaDemo />
            <ArrangeDemo />
          </Container>
          <hr />
        </body>
      </html>
    )
  }

}

export default Root

