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

const ChipEducation = ({ end_date, img, school, start_date, title }) => (
  <StyChip>
    <StyChipImg src={`/static/${img}`} alt="icon" />

    <Heading align="center" size={3}>
      {title}
    </Heading>
    
    <Paragraph align="center">{school}</Paragraph>

    <Paragraph align="center">
      {moment(start_date).format('YYYY')} &#8208;{' '}
      {moment(end_date).isValid()
        ? moment(end_date).format('YYYY')
        : 'Current'}
    </Paragraph>
  </StyChip>
)

export default ChipEducation