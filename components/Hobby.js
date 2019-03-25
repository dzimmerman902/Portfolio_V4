import PropTypes from 'prop-types'
import styled from 'styled-components'

import Heading from './Heading'
import Paragraph from './Paragraph'

const Card = styled.div`
  text-align: center;
`

const Img = styled.img`
  margin-bottom: 4rem;
  height: 14rem;
`

const Hobby = ({ details, img, name }) => (
  <Card>
    <Img src={`/static/${img}`} alt="hobby" />

    <Heading align="center" size={3}>{name}</Heading>

    <Paragraph align="center">{details}</Paragraph>
  </Card>
)

export default Hobby