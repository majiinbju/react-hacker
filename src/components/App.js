import React from 'react'
import { Global, css } from '@emotion/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MusicPlayer from './MusicPlayer'

const App = () => (
  <Router>
    <Global styles={GlobalCSS} />

    <Switch>
      <Route path="/">
        <MusicPlayer />
      </Route>
    </Switch>
  </Router>
)

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial;
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
