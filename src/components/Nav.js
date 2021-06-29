/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

/**
 * This is just a example to show you how you can create components with this type of syntax as well.
 * You have flexibility and don't just have to use the css prop all the time.
 */
const ListItem = styled.li`
  &:first-child {
    margin-right: 15px;
  }
`

const Nav = () => {
  return (
    <nav className="Nav" css={CSS}>
      <ul>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>

        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
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
    a {
      color: white;
    }
  }
`

export default Nav
