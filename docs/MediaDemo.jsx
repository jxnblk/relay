
import React from 'react'
import { Row, Col, Media } from '..'

class MediaDemo extends React.Component {

  render () {
    return (
      <section>
        <h2>Media Demo</h2>
        <Row>
          <Col width={6}>
            <Media>
              <Media.Img>
                <img src='//placehold.it/96' />
              </Media.Img>
              <Media.Body>
                Media Object
              </Media.Body>
            </Media>
            <Media>
              <Media.Body>
                Media Object Right
              </Media.Body>
              <Media.Img right>
                <img src='//placehold.it/96' />
              </Media.Img>
            </Media>
            <Media>
              <Media.Img middle>
                <img src='//placehold.it/96' />
              </Media.Img>
              <Media.Body middle>
                Media Object Middle
              </Media.Body>
            </Media>
            <Media>
              <Media.Img bottom>
                <img src='//placehold.it/96' />
              </Media.Img>
              <Media.Body bottom>
                Media Object Bottom
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </section>
    )
  }

}

export default MediaDemo

