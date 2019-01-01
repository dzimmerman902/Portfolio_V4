import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { basic } from '../../styles/themes'
import Meta from '../../components/Meta'

class Main extends Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={basic}>
        <div>
          <Meta />
          {children}
        </div>
      </ThemeProvider>
    )
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Main.defaultProps = {
  children: null
}

export default Main