import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Meta from './Meta'

class Page extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Meta />
        Main Page
        {children}
      </div>
    )
  }
}

export default Page
