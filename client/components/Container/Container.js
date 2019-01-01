import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ContainerStyled } from './ContainerStyled'

class Container extends Component {

  render() {
    const { children } = this.props
    return (
      <ContainerStyled
        className="this"
      >
        {children}
      </ContainerStyled>
    )
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Container.defaultProps = {
  children: null
}


export default Container