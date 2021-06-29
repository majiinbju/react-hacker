/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import reactLogo from '../img/react.png'

const Home = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="Home" css={CSS}>
      <img src={reactLogo} alt="react" />

      <Button variant="warning" onClick={handleShow}>
        Click Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Woohoo, you are reading this text in a modal!</p>

          <p>
            Here is an example of a Font Awesome Icon:
            <br />
            <i className="fa fa-2x fa-handshake-o" aria-hidden="true" />
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
