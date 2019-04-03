import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import Skill from '../components/Skill'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Row from '../components/Row'

const Section = styled.div`
  background-image: ${({ theme }) => theme.backgroundImage(0.4)},
    url('/static/comp-1.jpg');
  background-size: cover;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  ${({ theme }) => theme.response('large', css`
    grid-template-columns: 1fr;
  `)}
`

const Card = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 0.8rem;
  padding: 2rem;
`

const Title = styled.div`
  color: ${({ theme }) => theme.colorBlack};
  font-size: 2rem;
  font-weight: 800;

  margin-bottom: 2rem;
`

const Skills = () => {
  const [programming, setProgramming] = useState([])
  const [soft, setSoft] = useState([])
  const [technical, setTechnical] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/programming')
      .then(res => res.json())
      .then(results => {
        setProgramming(results)
      })

    fetch('https://devinzimmerman-api.herokuapp.com/v1/soft')
      .then(res => res.json())
      .then(results => {
        setSoft(results)
      })

    fetch('https://devinzimmerman-api.herokuapp.com/v1/technical')
      .then(res => res.json())
      .then(results => {
        setTechnical(results)
      })
  }, [])

  return (
    <Section id="skills">
      <Container>
        <Row>
          <Heading align="center" color="white" size={1}>
            Skills and Technologies
          </Heading>

          <Content>
            <Card>
              <Title>Programming Languages / Libraries</Title>
              {programming
                .sort((a, b) => a.order - b.order)
                .map(item => <Skill key={item._id} {...item} />) || null}
            </Card>

            <Card>
              <Title>Technical Skills / Software</Title>
              {soft
                .sort((a, b) => a.order - b.order)
                .map(item => <Skill key={item._id} {...item} />) || null}
            </Card>

            <Card>
              <Title>Soft Skills</Title>
              {technical
                .sort((a, b) => a.order - b.order)
                .map(item => <Skill key={item._id} {...item} />) || null}
            </Card>
          </Content>
        </Row>
      </Container>
    </Section>
  )
}

export default Skills
