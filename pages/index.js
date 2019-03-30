import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import portfolioTheme from '../themes/portfolio'
import GlobalStyle from '../themes/globalStyle'

import Activities from '../sections/Activities'
import Banner from '../sections/Banner'
import Built from '../sections/Built'
import Contact from '../sections/Contact'
import Education from '../sections/Education'
import Employment from '../sections/Employment'
import Hobbies from '../sections/Hobbies'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Sidebar from '../components/Sidebar'
import References from '../sections/References'

const Home = () => (
  <ThemeProvider theme={portfolioTheme}>
    <Fragment>
      <GlobalStyle />
      <main>
        <Sidebar />
        <Banner />
        <Built />
        <Employment />
        <Skills />
        <Education />
        <Projects />
        <References />
        <Hobbies />
        <Activities />
        <Contact />
      </main>
    </Fragment>
  </ThemeProvider>
)

export default Home
