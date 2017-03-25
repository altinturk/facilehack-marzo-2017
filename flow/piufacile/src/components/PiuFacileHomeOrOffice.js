import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacileHomeOrOffice extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  handleNext( to ) {
    return () => {
      console.log( "handleNext to " + to )
      this.props.nothing( { "what": to } )
      this.props.push( to )
    }
  }

  render() {
    const TO_UFFICIO = `/phase/office`
    const TO_HOME    = `/phase/casa`

    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Home Or Office</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3>Cerchi un ADSL per casa o ufficio?</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Button
              onClick={this.handleNext( TO_HOME )}
            >
              Casa
            </Button>
          </Col>
          <Col xs={6} md={6}>
            <Button
              onClick={this.handleNext( TO_UFFICIO )}
            >
              Ufficio
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => ({
  piu_facile: state.piu_facile
})

export default connect(
  mapStateToProps, {
    nothing,
    push
  }
)( PiuFacileHomeOrOffice )
