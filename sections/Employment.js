import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Company from '../components/Company'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'

const Section = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const Content = styled.div`
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
    <Section>
      <Container>
        <Row>
          <Heading align="center" color="black" size={1}>
            Employment History
          </Heading>

          <Paragraph align="center">
            A Web Developer with Client-Centric Sensibilities.
          </Paragraph>

          <Content>
            {employment
              .sort((a, b) => a.order - b.order)
              .map(item => <Company key={item._id} {...item} />) || null}
          </Content>
        </Row>
      </Container>
    </Section>
  )
}

export default Employment
