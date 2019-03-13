import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ChipEducation from '../components/ChipEducation'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Section from '../components/Section'

const StyEducation = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const StyEductionChips = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  margin-top: 7rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const Education = () => {
  const [education, setEducation] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/education')
      .then(response => response.json())
      .then(results => {
        setEducation(results)
      })
  }, [])

  return (
    <StyEducation>
      <Container>
        <Section>
          <Heading align="center" size={1}>
            Education & Courses
          </Heading>

          <StyEductionChips>
            {education
              .sort((a, b) => a.order - b.order)
              .map(item => <ChipEducation key={item.id} {...item} />) || null}
          </StyEductionChips>
        </Section>
      </Container>
    </StyEducation>
  )
}

export default Education
