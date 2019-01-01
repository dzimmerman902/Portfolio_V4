import React, { Component } from 'react'

import Button from '../Button'
import Background from '../Background'
import Container from '../Container'
import HeaderStyle, { HeaderTitle } from './HeaderStyle'

class Header extends Component {
  render() {
    return (
      <Container>
        <Background>
          <HeaderStyle>
            <HeaderTitle>Devin Zimmerman</HeaderTitle>
            <div className="sub-title">Full Stack Web Developer</div>
            <Button>See Portfolio</Button>
          </HeaderStyle>
        </Background>
      </Container>
    )
  }
}

export default Header