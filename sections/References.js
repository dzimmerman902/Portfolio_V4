import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Reference from '../components/Reference'
import Row from '../components/Row'

const Section = styled.div`
  background-image: ${({ theme }) => theme.backgroundImage(1)},
    url('/static/references.jpg');
  background-size: cover;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  margin-top: 7rem;
`

const References = () => {
  const [references, setReferences] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/references')
      .then(res => res.json())
      .then(results => {
        setReferences(results)
      })
  }, [])

  return (
    <Section id="references">
      <Container>
        <Row>
          <Paragraph align="center" color="white" transform="uppercase" style={{ marginBottom: '1rem' }}>References</Paragraph>
          
          <Heading align="center" color="white" size={1}>
            What People Say
          </Heading>

          <Content>
            {references.sort((a, b) => a.order - b.order).map(item => <Reference key={item._id} {...item} />) || null}
          </Content>
        </Row>
      </Container>
    </Section>
  )
}

export default References
