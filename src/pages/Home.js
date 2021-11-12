/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import reactLogo from '../img/react.png'

const Home = () => {
  return (
    <div className="Home" css={CSS}>
      <img src={reactLogo} alt="react" />
    </div>
  )
}

const CSS = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #282c34;
`

export default Home
