import React, { Component } from 'react'

import BackgroundStyled from './BackgroundStyled'

class Background extends Component {
  render() {
    const { children } = this.props

    return <BackgroundStyled>{children}</BackgroundStyled>
  }
}

export default Background
