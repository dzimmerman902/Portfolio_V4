import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from './ButtonStyled'

class Button extends Component {
  render() {
    const { children, color, onClick } = this.props

    return (
      <ButtonStyled color={color} onClick={onClick}>
        {children}
      </ButtonStyled>
    )
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  children: null,
  color: 'primary',
  onClick: null
}

export default Button
