import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Hobby from '../components/Hobby'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'

const Section = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-column-gap: 6rem;
  grid-row-gap: 6rem;

  margin-top: 7rem;
`

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/hobby')
      .then(res => res.json())
      .then(results => {
        setHobbies(results)
      })
  }, [])

  return (
    <Section id="hobbies">
      <Container>
        <Row>
          <Heading align="center" color="black" size={1}>
            Hobbies &amp; Interests
          </Heading>

          <Paragraph align="center">Life Outside of Programming</Paragraph>

          <Content>
            {hobbies
              .sort((a, b) => a.order - b.order)
              .map(item => <Hobby key={item._id} {...item} />) || null}
          </Content>
        </Row>
      </Container>
    </Section>
  )
}

export default Hobbies
