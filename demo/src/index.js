import React, { Component } from 'react'
import { render } from 'react-dom'

import Card from './Card'
import Container from './Container'
import Example from '../../src'

class Demo extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Example />
        </Card>
      </Container>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
