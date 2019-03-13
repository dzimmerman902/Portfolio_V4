import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import Heading from './Heading'
import Paragraph from './Paragraph'

const StyChip = styled.div`
  text-align: center;
`

const StyChipImg = styled.img`
  height: 20rem;
  margin-bottom: 2rem;
  text-align: center;
`

const ChipEmployment = ({ _id, company, end_date, src, start_date, title }) => (
  <StyChip>
    <StyChipImg src={src} alt="icon" />

    <Heading align="center" size={3}>
      {title}
    </Heading>

    <Paragraph align="center">{company}</Paragraph>

    <Paragraph align="center">
      {moment(start_date).format('MMMM YYYY')} &#8208;{' '}
      {moment(end_date).isValid()
        ? moment(end_date).format('MMMM YYYY')
        : 'Current'}
    </Paragraph>
  </StyChip>
)

ChipEmployment.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ChipEmployment
