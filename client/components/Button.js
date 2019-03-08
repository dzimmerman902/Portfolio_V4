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
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  padding: 1.1rem 3rem;
  border-radius: 3rem;
  cursor: pointer;

  ${props => BUTTON_COLORS[props.color](props)}

  &:focus {
    outline: none;
  }
`

const Button = props => {
  const { children, color } = props
  return <StyledButton color={color}>{children}</StyledButton>
}

export default Button
