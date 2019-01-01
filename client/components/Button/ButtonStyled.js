import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button`
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  border-radius: 3rem;
  cursor: pointer;
  outline: none;
  padding: 1.1rem 3rem;

  transition: all 0.3s;

  ${({ color }) =>
    color === 'white' &&
    css`
      color: white;
      background-color: transparent;
      border-color: white;
    `}

  ${({ color }) =>
    color === 'purple' &&
    css`
      color: white;
      background-color: #663399;
    `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0rem 1.2rem 2rem -0.5rem rgba(48,50,52,.8);
  }

  &:active {
    transform: translateY(0);
  }
`
