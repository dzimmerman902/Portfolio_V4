import Head from 'next/head'
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
  <>
    <Head>
      <title>Devin Zimmerman</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider theme={portfolioTheme}>
      <>
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
      </>
    </ThemeProvider>
  </>
)

export default Home
