import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../themes/portfolio'

import Heading from './Heading'
import Paragraph from './Paragraph'

const StyledChip = styled.div`
  text-align: center;
`

const StyledChipImg = styled.img`
  height: 20rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Chip = ({ details, src, title }) => (
  <StyledChip>
    <StyledChipImg src={src} alt="icon" />
    <Heading align="center" size={3}>{title}</Heading>
    {details.map(deet => (
      <Paragraph align="center">{deet}</Paragraph>
    ))}
  </StyledChip>
)

Chip.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Chip
