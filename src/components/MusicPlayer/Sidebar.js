/** @jsx jsx */
import React, {useState} from 'react'
import { css, jsx } from '@emotion/react'
import logo from '../../img/logo.png'

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    playlists: {
      home: null,
      favorites: null,
    }
  })

  const playlists = Object.keys(state.playlists)

  return (
    <ul className="Sidebar" css={CSS}>
        <img src={logo} />

        <li className="library">Library</li>

        {
          playlists.map(list => (
            /* if the current list item has a state of currentPlaylist, add the class active, else add nothing */
            <li 
              key={list}
              className={list === state.currentPlaylist ? 'active': ''}
              // onClick updates the current state of the list item 
              onClick={() => {
                setState({...state, currentPlaylist: list})
              }}
              >
              {list}
              </li>
          ))
        }

        <li className="new-playlist">
          <i className="fa fa-plus-circle" />
          <span>New Playlist</span>
        </li>
    </ul>
  )
}

const CSS = css`
  width: 200px;
  height: 100%;
  background: #000000;
  padding-top: 20px;

  img {
    height: 60px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    padding-left: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  li.active {
    border-left: 2px solid white;
    padding-left: 18px;
  }

  li.library {
    cursor: unset;
    font-weight: 300;
    text-transform: uppercase;
    color: gray;
  }

  li.new-playlist {
    position: absolute;
    bottom: 80px;

    i {
      margin-right: 10px;
      transform: translateY(1px);

      &:before {
        color: gray;
        font-size: 20px;
      }
    }

    span {
      color: gray;
      font-weight: 300;
    }

  }
`

export default Sidebar
