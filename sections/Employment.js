import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ChipEmployment from '../components/ChipEmployment'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

const StyEmployment = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const StyEmploymentContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;

  margin-top: 7rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const Employment = () => {
  const [employment, setEmployment] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/employment')
      .then(res => res.json())
      .then(results => {
        setEmployment(results)
      })
  }, [])

  return (
    <StyEmployment>
      <Container>
        <Section>
          <Heading align="center" color="black" size={1}>
            Employment History
          </Heading>

          <Paragraph align="center">
            A Web Developer with Client-Centric Sensibilities.
          </Paragraph>

          <StyEmploymentContent>
            {employment
              .sort((a, b) => a.order - b.order)
              .map(item => <ChipEmployment key={item._id} {...item} />) || null}
          </StyEmploymentContent>
        </Section>
      </Container>
    </StyEmployment>
  )
}

export default Employment
