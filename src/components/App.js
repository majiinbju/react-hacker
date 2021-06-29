/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from '../pages/Home'
import About from '../pages/About'

const App = () => (
  <Router>
    <Global styles={GlobalCSS} />

    <Nav />

    <Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`

export default App
