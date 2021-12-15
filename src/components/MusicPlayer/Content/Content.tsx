import React, { FC, useEffect, useState, useContext } from 'react'
import { StoreContext } from '../MusicPayer'

import './style.css'
import { loadSongs, likeSong } from '../../../api'

const Content: FC = () => {
  const { state, dispatch } = useContext(StoreContext)

  const [list, setList] = useState<any>([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [playVisibleId, setPlayVisibleId] = useState('')

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await loadSongs()
      if (result && result.status === 200) {
        console.log(result.data)

        setList(result.data)
      }
    }
    fetchSongs()
  }, [])

  console.log(list)

  return (
    <div id="content">
      <table>
        <thead>
          <tr>
            <td />
            <td />
            <td>Title</td>
            <td>Artist</td>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((song: any) => {
              const { id, name, music_file_path, artist_name, cover_image_path } = song

              return (
                <tr key={id}>
                  <td style={{ width: 75, paddingLeft: 5 }}>
                    <Favorite  id={id} />

                    <span style={{ marginRight: 20 }} />

                    <PlayPause
                      playing={state.playing}
                      isCurrentSong={state.id === id}
                      visible={playVisibleId === id}
                    />

                    <span style={{ marginRight: 20 }} />
                  </td>
                  <td>
                    <img src={cover_image_path} alt="" />
                  </td>
                  <td
                    className="songName"
                    onClick={() => {
                      dispatch({ type: 'PLAY', path: music_file_path, id })
                      setPlayVisibleId(id)
                    }}
                  >
                    {name}
                  </td>
                  <td>{artist_name}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Content

const Favorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return isFavorite ? (
    <i className="fa fa-heart" onClick={() => setIsFavorite((prev) => !prev)} />
  ) : (
    <i
      onClick={() => {
        likeSong(id)
        setIsFavorite((prev) => !prev)
      }}
      className="fa fa-heart-o"
    />
  )
}

const PlayPause = ({ playing, isCurrentSong, visible }) => {
  const { dispatch } = useContext(StoreContext)
  const style: any = { visibility: visible ? 'visible' : 'hidden' }

  if (isCurrentSong && playing) {
    return (
      <i
        className="fa fa-pause"
        onClick={() => dispatch({ type: 'PAUSE' })}
        style={style}
      />
    )
  } else {
    return (
      <i
        className="fa fa-play"
        onClick={() => dispatch({ type: 'PLAY' })}
        style={style}
      />
    )
  }
}
