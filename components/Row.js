import styled, { css } from 'styled-components'

const StyledRow = styled.div`
  padding: 14rem 0;

  ${({ theme }) => theme.response('medium', css`
    padding: 10rem 0;
  `)}
`

const Row = ({ children, ...rest }) => (
  <StyledRow {...rest}>{children}</StyledRow>
)

export default Row