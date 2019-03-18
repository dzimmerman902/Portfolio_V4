import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Section from '../components/Section'

const StyWhatPeopleSay = styled.div`
  background-image: ${({ theme }) => theme.backgroundImage()},
    url('/static/references.jpg');
  background-size: cover;
`

const StyWhatPeopleSayContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  margin-top: 7rem;
`

const WhatPeopleSay = () => {
  const [references, setReferences] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/references')
      .then(res => res.json())
      .then(results => {
        setReferences(results)
      })
  }, [])

  return (
    <StyWhatPeopleSay>
      <Container>
        <Section>
          <Heading align="center" color="white" size={1}>
            What People Say
          </Heading>

          <StyWhatPeopleSayContent />
        </Section>
      </Container>
    </StyWhatPeopleSay>
  )
}

export default WhatPeopleSay
