import styled from 'styled-components'

import Heading from './Heading'
import Paragraph from './Paragraph'

const Activity = ({ details, link, name }) => (
  <div>
    <Heading size={3}>{name}</Heading>
    <Paragraph mb="30px">{details}</Paragraph>
    <Heading size={3}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Click Here
      </a>
    </Heading>
  </div>
)

export default Activity
