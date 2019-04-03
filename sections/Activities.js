import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Activity from '../components/Activity'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Row from '../components/Row'

const Section = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 10rem;
`

const Activities = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/activity')
      .then(response => response.json())
      .then(results => {
        setActivities(results)
      })
  }, [])

  return (
    <Section id="activities">
      <Container>
        <Row>
          <Heading align="center" mb="4rem" size={1}>
            Extracurricular Activities
          </Heading>

          <Content> 
            {activities.sort((a, b) => a.order - b.order).map(item => <Activity key={item._id} {...item} />) || null}
          </Content>
        </Row>
      </Container>
    </Section>
  )
}

export default Activities
