import styled from 'styled-components'

const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 0.8rem;
  padding: 2rem;
`

const Form = ({ children }) => (
  <StyledForm>{children}</StyledForm>
)

export default Form