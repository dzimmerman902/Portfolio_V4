import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import portfolioTheme from '../themes/portfolio'
import GlobalStyle from '../themes/globalStyle'

import Banner from '../sections/Banner'
import Built from '../sections/Built'
import Education from '../sections/Education'
import Employment from '../sections/Employment'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import WhatPeopleSay from '../sections/WhatPeopleSay'

const Home = () => (
  <ThemeProvider theme={portfolioTheme}>
    <Fragment>
      <GlobalStyle />
      <main className="home">
        <Banner />
        <Built />
        <Employment />
        <Skills />
        <Education />
        <Projects />
        <WhatPeopleSay />
      </main>
    </Fragment>
  </ThemeProvider>
)

export default Home
