/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const About = () => {
  return (
    <div className="About" css={CSS}>
      <h1 className="display-1">About Me</h1>

      {/* You can also use the css prop directly on elements. So basically you have a few ways of styling,
          The css prop outside of the component, css prop directly on any element, and using the @emotion/styled
          library. For an example of the @emotion/styled way of styling, check the Nav component.
      */}
      <p
        css={css`
          max-width: 600px;
          margin: 0 auto;
          color: white;
        `}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
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

  h1 {
    color: white;
  }
`

export default About
