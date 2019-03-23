import styled from 'styled-components'
import moment from 'moment'

import Heading from './Heading'
import Paragraph from './Paragraph'

const Card = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 20rem;
  margin-bottom: 2rem;
  text-align: center;
`

const School = ({ end_date, img, school, start_date, title }) => (
  <Card>
    <Img src={`/static/${img}`} alt="icon" />

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
  </Card>
)

export default School