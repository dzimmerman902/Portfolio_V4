import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  font-size: 1.2rem;
  letter-spacing: 1px;

  background-color: ${({ theme }) => theme.colorGreyLight};
  border: none;
  border-radius: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colorGrey};
  }
`

const Label = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colorGrey};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  display: block;
  margin-bottom: 1rem;
`

const TextArea = ({ label }) => (
  <>
    {label && <Label>{label}</Label>}
    <StyledTextArea rows="7" />
  </>
)

export default TextArea
