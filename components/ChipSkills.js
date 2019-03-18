import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyChipSkills = styled.div`
    color: white;
  font-size: 1.8rem;
  cursor: pointer;

  display: inline-block;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colorPrimary};
  border-radius: 0.8rem;
  transition: all 0.2s;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
    margin-right: 1.4rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow()};
  }
`

const ChipSkills = ({ name }) => (
  <StyChipSkills>{name}</StyChipSkills>
)

export default ChipSkills