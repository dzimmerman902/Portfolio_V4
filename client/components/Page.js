import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Button from './Button'
import Container from './Container'
import Meta from './Meta/Meta'

class Page extends Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={{ backgroundColor: 'blue' }}>
        <div>
          <Container>

            <Meta />
            <Button color="purple">Download Resume</Button>
            {children}
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Page.defaultProps = {
  children: null
}

export default Page
