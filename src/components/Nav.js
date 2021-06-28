/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="Nav" css={CSS}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

const CSS = css`
  position: absolute;
  top: 25px;
  right: 25px;

  ul {
    display: flex;

    li:first-child {
      margin-right: 15px;
    }

    a {
      color: white;
    }
  }
`

export default Nav
