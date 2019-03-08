import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import portfolioTheme from '../themes/portfolio'
import GlobalStyle from '../themes/globalStyle'

import Banner from '../sections/Banner'
import Education from '../sections/Education'
import Employment from '../sections/Employment'
import Skills from '../sections/Skills'

const Home = () => (
  <ThemeProvider theme={portfolioTheme}>
    <Fragment>
      <GlobalStyle />
      <main className="home">
        <Banner />
        <Employment />
        <Skills />
        <Education />
      </main>
    </Fragment>
  </ThemeProvider>
)

export default Home
