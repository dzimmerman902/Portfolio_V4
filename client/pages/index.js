import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import portfolioTheme from '../themes/portfolio'
import GlobalStyle from '../themes/globalStyle'

import Banner from '../sections/Banner'
import Employment from '../sections/Employment'

const Home = () => (
  <ThemeProvider theme={portfolioTheme}>
    <Fragment>
      <GlobalStyle />
      <main className="home">
        <Banner />
        <Employment />
      </main>
    </Fragment>
  </ThemeProvider>
)

export default Home
