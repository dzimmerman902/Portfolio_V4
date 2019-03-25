import PropTypes from 'prop-types'
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

const Company = ({ company, end_date, img, start_date, title }) => (
  <Card>
    <Img src={`/static/${img}`} alt="icon" />

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
  </Card>
)

Company.propTypes = {
  company: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  start_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Company
