import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BUTTON_COLORS = {
  primary: ({ theme }) => css`
    color: ${theme.colorWhite};

    background-color: ${theme.colorPrimary};
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px);
      box-shadow: ${theme.boxShadow()};
    }
  `,

  light: ({ theme }) => css`
    color: ${theme.colorWhite};
    border-color: ${theme.colorWhite};

    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s;

    &:hover {
      background-color: ${theme.colorPrimary};
      transform: translateY(-3px);
      box-shadow: ${theme.boxShadow()};
    }
  `
}

const StyledButton = styled.button`
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;

  padding: 1.1rem 3rem;
  border-radius: 3rem;
  cursor: pointer;

  ${props => BUTTON_COLORS[props.color](props)}

  &:focus {
    outline: none;
  }
`

const StyledButtonLink = styled.a`
  font-size: 2rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;

  display: inline-block;
  padding: 1.1rem 3rem;
  border: 1px solid white;
  border-radius: 3rem;
  cursor: pointer;

  ${props => BUTTON_COLORS[props.color](props)}

  &:focus {
    outline: none;
  }
`

const Button = props => {
  const { children, color, download, link } = props

  if (link) {
    return (
      <StyledButtonLink color={color} href={link} download={download}>
        {children}
      </StyledButtonLink>
    )
  }

  return <StyledButton color={color}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  color: PropTypes.string.isRequired
}

Button.defaultProps = {
}

export default Button
